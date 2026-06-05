---
name: factory
description: Crea y gestiona componentes de OpenCode como agentes, skills, prompts y workflows
---

# Factory Skill

Este skill activa al agente factory para crear y mantener componentes de OpenCode.

## ¿Qué puede crear?

| Componente | Ubicación | Formato |
|-----------|-----------|---------|
| Agentes | `.opencode/agents/<name>.md` | Markdown + frontmatter YAML |
| Skills | `.opencode/skills/<name>.md` | Markdown + frontmatter YAML |
| Prompts | `.opencode/prompts/<name>.txt` | Texto plano |
| Workflows | `.opencode/skills/<name>.md` | Skill orquestador |
| Config | `opencode.jsonc` | JSON con comentarios |

## Convenciones de nomenclatura
- Agentes: kebab-case (`code-reviewer.md`, `angular-helper.md`)
- Skills: kebab-case (`deploy-workflow.md`)
- Prompts: kebab-case (`build.txt`, `review.txt`)
- IDs de agente en JSON: kebab-case

## Estructura de directorios
```
.opencode/
├── agents/        # Agentes markdown
├── skills/        # Skills markdown
├── prompts/       # Prompts texto
└── factory/
    └── templates/ # Plantillas de referencia
```

## Comandos útiles para factory
```powershell
# Listar agentes existentes
Get-ChildItem .opencode/agents/*.md | Select-Object Name

# Listar skills existentes
Get-ChildItem .opencode/skills/*.md | Select-Object Name

# Validar JSON de configuración
bun -e "JSON.parse(require('fs').readFileSync('opencode.jsonc','utf8'))"

# Verificar que un archivo existe
Test-Path ".opencode/agents/mi-agente.md"
```

## Flujo de trabajo típico
1. El usuario pide crear un componente
2. El factory examina lo existente para evitar duplicados
3. Crea el archivo con frontmatter y contenido válido
4. Si aplica, registra en `opencode.jsonc`
5. Valida que todo esté correcto
6. Informa al usuario el resultado
