---
zk_id: reg-027
title: "Votaciones y Toma de Acuerdos"
type: note
tags: [reglamento, votaciones, acuerdos, democracia, horizontalidad]
author: lanca
created: 2026-06-09
updated: 2026-06-09
collection: poc-admin-migala
path: docs/reglamento/nodes/
---

# Votaciones y Toma de Acuerdos

## Idea atómica

El Título Quinto regula **cómo se toman las decisiones** en el Proyecto Migala, basado en los principios de horizontalidad, diálogo abierto y el principio de las dos vacas. Define tipos de votación, métodos y responsables.

## Principios de toma de acuerdos (Art. 126)

- **Diálogo abierto, participativo, incluyente y público**
- Principio de las dos vacas ("Juntos pensamos mejor")
- Lograr **consensos** antes que votaciones
- Condensar la información para todos

## Tipos de votación (Art. 131)

### Votación Económica `#votacion-rapida`
| Característica | Valor |
|:--------------|:------|
| Duración | ≤ 2 minutos |
| Plataformas | Jitsi, Telegram, Mano Alzada |
| Propósito | Decisiones rápidas durante sesiones |
| Requisito | Moderador explica claramente el tema antes de votar |

### Votación Larga `#votacion-profunda`
| Característica | Valor |
|:--------------|:------|
| Duración | 5-7 días naturales |
| Inicio | Al día siguiente de generarla |
| Propósito | Llegar a la mayor cantidad de afiliados |
| Plataformas | Telegram, Google Forms |
| Requisito | Incluir resumen + hipervínculo de sesión si aplica |

## Métodos de votación (Art. 130)

| Método | Cómo funciona |
|--------|---------------|
| **Jitsi Polls** | Encuesta integrada, captura de pantalla → chat #Votaciones |
| **Telegram Polls** | Opción "Poll"/Encuesta en sub-chat #Votaciones |
| **Mano Alzada** | Presencial o virtual (emojis, chat) según criterio del moderador |
| **Google Forms** | Formularios con información amplia y diversos formatos |

## Matriz de combinaciones

```
                ┌─────────────┬─────────────┐
                │  Económica  │    Larga    │
├──────────────┼─────────────┼─────────────┤
│ Jitsi        │     ✅      │     ❌      │
│ Telegram     │     ✅      │     ✅      │
│ Mano Alzada  │     ✅      │     ❌      │
│ Google Forms │     ❌      │     ✅      │
└──────────────┴─────────────┴─────────────┘
```

## Responsable de votaciones (Art. 132)

El responsable de generar las votaciones debe ser **elegido por los mismos afiliados** del grupo.

## Reglas adicionales

- Las votaciones son **abiertas, participativas, incluyentes y públicas** (Art. 129)
- Solo para **Afiliados** del Proyecto Migala (Art. 129)
- Decisiones en sesión presencial o virtual (Art. 128)
- Cada órgano puede generar sus propios mecanismos sin contravenir este Título (Art. 127)

## Conexiones

- [[reg-002]] — Horizontalidad, diálogo y dos vacas como principios rectores
- [[reg-004]] — Solo afiliados votan (simpatizantes no)
- [[reg-026]] — Las votaciones ocurren en sesiones (ordinarias/extraordinarias)
- [[reg-010]] — Coordinación General somete proyectos a votación
