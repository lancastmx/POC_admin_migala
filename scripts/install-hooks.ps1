#!/usr/bin/env pwsh
<#
.SYNOPSIS
  Instala los hooks de git del proyecto (pre-commit para documentación automática).

.DESCRIPTION
  Configura core.hooksPath para que git use scripts/ como directorio de hooks.
  Esto permite versionar los hooks en el repositorio.
#>

$repoRoot = Split-Path -Parent $PSScriptRoot
$hooksDir = Join-Path -Path $repoRoot -ChildPath "scripts"

Write-Host "Instalando hooks de git..." -ForegroundColor Cyan

# Configurar git para usar scripts/ como directorio de hooks
git config core.hooksPath scripts

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ hooks instalados. Git usará scripts/ como directorio de hooks." -ForegroundColor Green
    Write-Host "  - pre-commit: $hooksDir\pre-commit.ps1" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Los hooks se ejecutarán automáticamente en cada commit." -ForegroundColor Yellow
} else {
    Write-Host "✗ Error al configurar hooks" -ForegroundColor Red
    exit 1
}
