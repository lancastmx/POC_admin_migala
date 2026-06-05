#!/usr/bin/env pwsh
<#
.SYNOPSIS
  Pre-commit hook: genera/actualiza documentación Zettelkasten + grafos antes de cada commit.

.DESCRIPTION
  Detecta archivos .ts modificados en el staging, actualiza su documentación,
  regenera el grafo de dependencias y agrega los cambios al commit.
  Requiere BashTool, ReadTool, WriteTool — se ejecuta via OpenCode.

  Instalación: .\scripts\install-hooks.ps1
#>

$ErrorActionPreference = "Stop"

# ── Configuración ──────────────────────────────────────────────
$docsDir = Join-Path -Path $PSScriptRoot -ChildPath "..\docs"
$srcDir  = Join-Path -Path $PSScriptRoot -ChildPath "..\src"
$zkIdsFile = Join-Path -Path $docsDir -ChildPath ".zk-ids.json"
$graphFile = Join-Path -Path $docsDir -ChildPath "GRAPH.md"
$indexFile = Join-Path -Path $docsDir -ChildPath "INDEX.md"

# ── 1. Obtener autor ───────────────────────────────────────────
$author = git config user.name
if (-not $author) { $author = "unknown" }

# ── 2. Detectar archivos modificados ───────────────────────────
$changedFiles = git diff --cached --name-only --diff-filter=ACMR | Where-Object { $_ -match '\.ts$' }
$allFiles = git ls-files '*.ts' | Where-Object { $_ -match '^src/' }

if (-not $changedFiles -and -not $allFiles) {
    Write-Host "  docs: sin archivos .ts para documentar" -ForegroundColor DarkGray
    exit 0
}

# Si hay cambios estructurales (routes, config, nuevos componentes), regenerar todo
$structuralPattern = '(app\.config|app\.routes|main)\.ts$'
$structuralChanges = $changedFiles | Where-Object { $_ -match $structuralPattern }
$regenerateAll = ($structuralChanges.Count -gt 0) -or (-not (Test-Path $zkIdsFile))

if ($regenerateAll) {
    Write-Host "  docs: cambios estructurales detectados, regenerando todo..." -ForegroundColor Yellow
    $filesToProcess = $allFiles
} else {
    $filesToProcess = $changedFiles
}

if (-not $filesToProcess) {
    Write-Host "  docs: sin cambios en archivos .ts" -ForegroundColor DarkGray
    exit 0
}

# ── 3. Cargar/crear registro de IDs Zettelkasten ──────────────
$zkIds = @{ comp = 1; serv = 1; dir = 1; pipe = 1; guard = 1; cfg = 1; entry = 1; idx = 1 }
if (Test-Path $zkIdsFile) {
    $zkIds = Get-Content $zkIdsFile -Raw | ConvertFrom-Json -AsHashtable
}

# ── 4. Mapa de archivo → ZK ID existente ──────────────────────
# Buscar en docs existentes para reutilizar IDs
$existingDocs = @{}
if (Test-Path $docsDir) {
    Get-ChildItem -Path $docsDir -Recurse -Filter "*.md" | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        if ($content -match '^---\s*\nzk_id:\s*(\S+)') {
            $existingDocs[$Matches[1]] = $_.FullName
        }
    }
}
# También mapear path del frontmatter a zk_id
$pathToZk = @{}
Get-ChildItem -Path $docsDir -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match '^---\s*\n.*?\npath:\s*(\S+).*?\nzk_id:\s*(\S+)') {
        # Need to parse properly - let's use simple multiline
    }
}
# Simpler approach: read frontmatter
Get-ChildItem -Path $docsDir -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match '(?s)^---\n(.*?)\n---') {
        $fm = $Matches[1]
        $path = ""
        $zk = ""
        if ($fm -match 'path:\s*(\S+)') { $path = $Matches[1] }
        if ($fm -match 'zk_id:\s*(\S+)') { $zk = $Matches[1] }
        if ($path -and $zk) { $pathToZk[$path] = $zk }
    }
}

# ── 5. Construir matriz de adjacencia ──────────────────────────
$adjacency = @{}  # filePath -> @{ imports = @[...], importedBy = @[...] }
$nodeInfo = @{}   # filePath -> @{ name, type, zk_id }

foreach ($file in $allFiles) {
    $fullPath = Join-Path -Path $PSScriptRoot -ChildPath "..\$file"
    if (-not (Test-Path $fullPath)) { continue }
    $content = Get-Content $fullPath -Raw

    # Clasificar
    $type = "other"
    $prefix = "cfg"
    if ($file -match '\.component\.ts$') { $type = "component"; $prefix = "comp" }
    elseif ($file -match '\.service\.ts$') { $type = "service"; $prefix = "serv" }
    elseif ($file -match '\.directive\.ts$') { $type = "directive"; $prefix = "dir" }
    elseif ($file -match '\.pipe\.ts$') { $type = "pipe"; $prefix = "pipe" }
    elseif ($file -match '\.guard\.ts$') { $type = "guard"; $prefix = "guard" }
    elseif ($file -match 'main\.ts$') { $type = "entry"; $prefix = "entry" }
    elseif ($file -match 'app\.config\.ts$' -or $file -match '\.routes\.ts$') { $type = "config"; $prefix = "cfg" }

    # Extraer nombre de clase
    $className = ""
    if ($content -match '(?:export )?(?:class|interface)\s+(\w+)') {
        $className = $Matches[1]
    } elseif ($file -match '(\w+)\.\w+\.ts$') {
        $className = $Matches[1]
    } else {
        $className = [System.IO.Path]::GetFileNameWithoutExtension($file)
    }

    # Extraer imports relativos
    $imports = @()
    $relativeImports = [regex]::Matches($content, "from\s+'([.].*?)'")
    foreach ($match in $relativeImports) {
        $importPath = $match.Groups[1].Value
        # Resolver path relativo
        $imports += $importPath
    }

    # Asignar/recuperar ZK ID
    $zkId = $pathToZk[$file]
    if (-not $zkId) {
        $zkId = "$prefix-$($zkIds[$prefix])"
        $zkIds[$prefix]++
        $pathToZk[$file] = $zkId
    }

    $nodeInfo[$file] = @{
        name = $className
        type = $type
        zk_id = $zkId
        prefix = $prefix
    }
    $adjacency[$file] = @{
        imports = @($imports)
        importedBy = @()
    }
}

# Resolver importedBy (invertir aristas)
foreach ($file in $adjacency.Keys) {
    $info = $nodeInfo[$file]
    foreach ($import in $adjacency[$file].imports) {
        # Buscar a qué archivo .ts resuelve este import
        $resolvedFile = Resolve-Import -baseFile $file -importPath $import -allFiles $allFiles
        if ($resolvedFile -and $adjacency.ContainsKey($resolvedFile)) {
            $adjacency[$resolvedFile].importedBy += $file
        }
    }
}

# ── 6. Generar/actualizar docs para archivos modificados ──────
$today = Get-Date -Format "yyyy-MM-dd"
$docCount = 0

foreach ($file in $filesToProcess) {
    $fullPath = Join-Path -Path $PSScriptRoot -ChildPath "..\$file"
    if (-not (Test-Path $fullPath)) { continue }

    $info = $nodeInfo[$file]
    if (-not $info) { continue }

    $content = Get-Content $fullPath -Raw
    $ad = $adjacency[$file]

    # Determinar subdirectorio de docs
    $docSubdir = ""
    $docFilename = ""
    switch ($info.type) {
        "component" { $docSubdir = "components"; $docFilename = "$($info.name -replace 'Component$','').component.md" }
        "service"   { $docSubdir = "services";   $docFilename = "$($info.name -replace 'Service$','').service.md" }
        "directive" { $docSubdir = "directives"; $docFilename = "$($info.name -replace 'Directive$','').directive.md" }
        "pipe"      { $docSubdir = "pipes";      $docFilename = "$($info.name -replace 'Pipe$','').pipe.md" }
        "guard"     { $docSubdir = "guards";     $docFilename = "$($info.name -replace 'Guard$','').guard.md" }
        "config"    { $docSubdir = "";           $docFilename = "$($info.name -replace 'Config$','').config.md" }
        "entry"     { $docSubdir = "";           $docFilename = "main.md" }
        default     { $docSubdir = "";           $docFilename = "$($info.name).md" }
    }

    $docDir = $docsDir
    if ($docSubdir) { $docDir = Join-Path -Path $docsDir -ChildPath $docSubdir }
    if (-not (Test-Path $docDir)) { New-Item -ItemType Directory -Path $docDir -Force | Out-Null }

    $docPath = Join-Path -Path $docDir -ChildPath $docFilename

    # Leer doc existente para preservar created date y changelog
    $createdDate = $today
    $existingChangelog = ""
    if (Test-Path $docPath) {
        $oldContent = Get-Content $docPath -Raw
        if ($oldContent -match 'created:\s*(\d{4}-\d{2}-\d{2})') { $createdDate = $Matches[1] }
        if ($oldContent -match '(?s)## Changelog\n(.*?)(?=\n## |\Z)') { $existingChangelog = $Matches[1] }
    }

    # Resolver dependencias a ZK IDs
    $depRows = @()
    $depLinks = @()
    $fanOut = 0
    foreach ($import in $ad.imports) {
        $resolved = Resolve-Import -baseFile $file -importPath $import -allFiles $allFiles
        if ($resolved -and $nodeInfo.ContainsKey($resolved)) {
            $depInfo = $nodeInfo[$resolved]
            $depRows += "| [[$($depInfo.zk_id)]] | $resolved | $($depInfo.type) |"
            $depLinks += "  $($info.zk_id)($($info.name)) --> $($depInfo.zk_id)($($depInfo.name))"
            $fanOut++
        }
    }
    $depLinksStr = if ($depLinks.Count -gt 0) { $depLinks -join "`n" } else { "  $($info.zk_id)($($info.name))" }

    # Resolver dependientes
    $depByRows = @()
    $backLinks = @()
    $fanIn = 0
    foreach ($dep in $ad.importedBy) {
        if ($nodeInfo.ContainsKey($dep)) {
            $depInfo = $nodeInfo[$dep]
            $depByRows += "| [[$($depInfo.zk_id)]] | $dep |"
            $backLinks += "- [[$($depInfo.zk_id)]] → $($depInfo.name) depende de este"
            $fanIn++
        }
    }
    $backLinksStr = if ($backLinks.Count -gt 0) { $backLinks -join "`n" } else { "Ninguno (nodo raíz o sin dependientes)" }

    # Extraer decorador info
    $selector = ""
    $inputsOutputs = ""
    if ($content -match '@Component\s*\(\s*([^)]+)\s*\)') {
        $compMeta = $Matches[1]
        if ($compMeta -match "selector:\s*'([^']+)'") { $selector = "`n## Selector`n`n\``$($Matches[1])\``" }
    }

    # Tags
    $extraTags = switch ($info.type) {
        "component" { @($info.type, "ui") }
        "service"   { @($info.type, "business-logic") }
        default     { @($info.type) }
    }
    $tagList = @("angular") + $extraTags | ForEach-Object { $_ } | Sort-Object -Unique
    $tagsStr = ($tagList -join ", ")

    # Nuevo entry de changelog
    $changelogEntry = "| $today | @$author | documentación actualizada |"
    $newChangelog = ""
    if ($existingChangelog) {
        $newChangelog = "$changelogEntry`n$existingChangelog"
    } else {
        $newChangelog = $changelogEntry
    }

    # Ensamblar documento
    # Escapar para markdown
    $mermaidBlock = @"
```mermaid
graph LR
$depLinksStr
```
"@

    $description = "Archivo $file - componente $($info.type)."

    # Construir frontmatter YAML manualmente
    $fmLines = @(
        "---",
        "zk_id: $($info.zk_id)",
        "title: $($info.name)",
        "description: $description",
        "type: $($info.type)",
        "tags: [$tagsStr]",
        "author: $author",
        "created: $createdDate",
        "updated: $today",
        "path: $file",
        "collection: poc-admin-migala",
        "---"
    )
    $frontmatter = $fmLines -join "`n"

    $depTable = if ($depRows.Count -gt 0) {
        @"
### Dependencias (importa)
| Nota | Archivo | Tipo |
|------|---------|------|
$($depRows -join "`n")
"@
    } else { "### Dependencias`nNinguna (sin imports relativos)" }

    $depByTable = if ($depByRows.Count -gt 0) {
        @"
### Dependientes (importado por)
| Nota | Archivo |
|------|---------|
$($depByRows -join "`n")
"@
    } else { "### Dependientes`nNinguno" }

    $mdContent = @"
# $($info.name)

## Descripción
$description

## API / Interfaz pública
$selector

## Grafo de dependencias

$mermaidBlock

| Métrica | Valor |
|---------|-------|
| Fan-out | $fanOut |
| Fan-in | $fanIn |

$depTable

$depByTable

## Zettelkasten

| Campo | Valor |
|-------|-------|
| ID | `$($info.zk_id)` |
| Autor | @$author |
| Creado | $createdDate |
| Actualizado | $today |
| Tags | $tagsStr |

### Enlaces salientes
- [[$backLinksStr]]

### Enlaces entrantes
$backLinksStr

## Changelog
| Fecha | Autor | Cambio |
|-------|-------|--------|
$newChangelog
"@

    $fullDoc = "$frontmatter`n`n$mdContent"
    Set-Content -Path $docPath -Value $fullDoc -NoNewline
    $docCount++
    Write-Host "  docs: actualizado $docFilename ($($info.zk_id))" -ForegroundColor DarkGray
}

# ── 7. Generar GRAPH.md global ────────────────────────────────
$graphNodes = @()
$graphEdges = @()
$nodeRows = @()
$edgeRows = @()

foreach ($file in $adjacency.Keys) {
    $info = $nodeInfo[$file]
    if (-not $info) { continue }
    $ad = $adjacency[$file]

    $fanIn = $ad.importedBy.Count
    $fanOut = $ad.imports.Count
    $graphNodes += "  $($info.zk_id)[$($info.name)]"
    $nodeRows += "| $($info.zk_id) | $($info.name) | $($info.type) | $fanIn | $fanOut |"

    $ad.imports | ForEach-Object {
        $resolved = Resolve-Import -baseFile $file -importPath $_ -allFiles $allFiles
        if ($resolved -and $nodeInfo.ContainsKey($resolved)) {
            $depInfo = $nodeInfo[$resolved]
            $graphEdges += "  $($info.zk_id) --> $($depInfo.zk_id)"
            $edgeRows += "| $($info.zk_id) | $($depInfo.zk_id) | import |"
        }
    }
}

$graphContent = @"
# Grafo de dependencias — POC_admin_migala

Generado automáticamente el $today por @$author.

## Grafo Mermaid

```mermaid
graph TD
$(($graphNodes | Sort-Object -Unique) -join "`n")

$(($graphEdges | Sort-Object -Unique) -join "`n")
```

## Nodos

| ID | Nombre | Tipo | Fan-in | Fan-out |
|----|--------|------|--------|---------|
$(($nodeRows | Sort-Object) -join "`n")

## Aristas

| Origen | Destino | Tipo |
|--------|---------|------|
$(($edgeRows | Sort-Object -Unique) -join "`n")
"@

Set-Content -Path $graphFile -Value $graphContent -NoNewline
Write-Host "  docs: GRAPH.md actualizado" -ForegroundColor DarkGray

# ── 8. Generar INDEX.md ───────────────────────────────────────
$byType = @{}
foreach ($file in $nodeInfo.Keys) {
    $info = $nodeInfo[$file]
    $type = $info.type
    if (-not $byType.ContainsKey($type)) { $byType[$type] = @() }
    $byType[$type] += @{ zk_id = $info.zk_id; name = $info.name }
}

$typeSections = @()
foreach ($type in @("component", "service", "directive", "pipe", "guard", "config", "entry")) {
    if ($byType.ContainsKey($type)) {
        $items = $byType[$type] | Sort-Object name
        $rows = $items | ForEach-Object { "- [[$($_.zk_id)]] $($_.name)" }
        $typeSections += "## $( (Get-Culture).TextInfo.ToTitleCase($type) )s`n`n$($rows -join "`n")"
    }
}

$indexContent = @"
# Índice de documentación — POC_admin_migala

Última actualización: $today

$(($typeSections -join "`n`n"))

## Grafos
- [[idx-meta|GRAPH.md]] — Grafo global de dependencias
"@

# Reemplazar [[idx-meta]] reference
$indexContent = $indexContent -replace '\[\[idx-meta\]\]', ''

Set-Content -Path $indexFile -Value "---`nzk_id: idx-meta`ntitle: Índice de documentación`ntype: index`ntags: [angular, index]`nauthor: $author`ncreated: $today`nupdated: $today`ncollection: poc-admin-migala`npath: docs/---`n`n$indexContent" -NoNewline
Write-Host "  docs: INDEX.md actualizado" -ForegroundColor DarkGray

# ── 9. Guardar IDs ────────────────────────────────────────────
$zkIdsJson = $zkIds | ConvertTo-Json
Set-Content -Path $zkIdsFile -Value $zkIdsJson -NoNewline

# ── 10. Agregar docs al commit ────────────────────────────────
git add docs/
Write-Host "  docs: $docCount archivos de documentación agregados al commit" -ForegroundColor Green

# ── Helper: Resolver imports relativos ────────────────────────
function Resolve-Import {
    param($baseFile, $importPath, $allFiles)
    $baseDir = Split-Path -Path $baseFile -Parent
    $resolved = [System.IO.Path]::GetFullPath((Join-Path -Path "src/$baseDir" -ChildPath "$importPath.ts"), (Join-Path -Path $PSScriptRoot -ChildPath ".."))

    # Normalizar a path relativo
    $repoRoot = (Resolve-Path (Join-Path -Path $PSScriptRoot -ChildPath "..")).Path
    $relative = $resolved.Substring($repoRoot.Length + 1) -replace '\\', '/'

    if ($allFiles -contains $relative) { return $relative }

    # Probar con /index.ts
    $relativeIndex = $relative -replace '\.ts$', '/index.ts'
    if ($allFiles -contains $relativeIndex) { return $relativeIndex }

    return $null
}
