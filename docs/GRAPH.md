# Grafo de dependencias — POC_admin_migala

Generado automáticamente el 2025-06-05 por @lanca.

## Grafo Mermaid

```mermaid
graph TD
  comp-001[App]
  cfg-001[AppConfig]
  cfg-002[AppRoutes]
  entry-001[Main]

  comp-001 --> cfg-001
  comp-001 --> cfg-002
  cfg-001 --> cfg-002
  entry-001 --> comp-001
  entry-001 --> cfg-001
```

## Nodos

| ID | Nombre | Tipo | Fan-in | Fan-out |
|----|--------|------|--------|---------|
| comp-001 | App | component | 1 | 2 |
| cfg-001 | AppConfig | config | 2 | 1 |
| cfg-002 | AppRoutes | config | 1 | 0 |
| entry-001 | Main | entry | 0 | 2 |

## Aristas

| Origen | Destino | Tipo |
|--------|---------|------|
| comp-001 | cfg-001 | import |
| comp-001 | cfg-002 | import |
| cfg-001 | cfg-002 | import |
| entry-001 | comp-001 | import |
| entry-001 | cfg-001 | import |
