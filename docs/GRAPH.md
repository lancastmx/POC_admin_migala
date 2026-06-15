# Grafo de dependencias — POC_admin_migala

Generado automáticamente el 2026-06-15 por @lancast.

## Grafo Mermaid

```mermaid
graph TD
  %% Componentes
  comp-001[App]
  comp-002[Topbar]
  comp-003[Footer]
  comp-004[Home]
  comp-005[Transparencia]
  comp-006[PageNotFound]
  comp-007[EmptyState]
  comp-008[UnderConstruction]
  comp-009[Reglamento]
  comp-010[PageBanner]
  comp-011[Manifiesto]
  comp-012[AudioReader]
  comp-013[Archivo]
  comp-014[Estructura]
  comp-015[Propuesta]

  %% Servicios
  serv-001[SeoService]
  serv-002[DarkModeService]
  serv-003[TextToSpeechService]

  %% Modelos
  model-001[Entidad]
  model-002[Reglamento]
  model-003[Organizacion]
  model-004[ArchivoDocumento]

  %% Datos
  data-001[MEXICO]
  data-002[REGLAMENTO_DATA]
  data-003[SOCIAL_NETWORKS]
  data-004[TOP_MENU]
  data-005[MenuItem]
  data-006[TELEGRAM_LINKS]
  data-007[ORGANIGRAMA_NACIONAL]
  data-008[ORGANIZACIONES_DATA]
  data-009[ARCHIVOS_DATA]
  data-010[PROCEDIMIENTOS_DATA]
  data-011[RUTA_CRITICA_DATA]

  %% Config
  cfg-001[AppConfig]
  cfg-002[AppRoutes]

  %% Entry
  entry-001[Main]

  %% Aristas - Componentes → dependencias
  comp-001 --> comp-002
  comp-001 --> comp-003
  comp-001 --> serv-002
  comp-002 --> data-004
  comp-002 --> serv-002
  comp-003 --> data-003
  comp-005 --> comp-010
  comp-005 --> data-003
  comp-005 --> serv-001
  comp-005 --> data-001
  comp-005 --> model-001
  comp-009 --> data-002
  comp-009 --> data-001
  comp-009 --> model-001
  comp-011 --> comp-010
  comp-011 --> comp-012
  comp-011 --> serv-001
  comp-011 --> serv-003
  comp-012 --> serv-003
  comp-013 --> data-006    %% TELEGRAM_LINKS
  comp-013 --> data-008    %% ORGANIZACIONES_DATA
  comp-013 --> data-009    %% ARCHIVOS_DATA
  comp-013 --> data-011    %% RUTA_CRITICA_DATA
  comp-013 --> data-001    %% MEXICO
  comp-013 --> data-003    %% SOCIAL_NETWORKS
  comp-013 --> serv-001    %% SeoService
  comp-013 --> model-003   %% Organizacion
  comp-013 --> model-004   %% ArchivoDocumento
  comp-014 --> data-008    %% ORGANIZACIONES_DATA
  comp-014 --> data-010    %% PROCEDIMIENTOS_DATA
  comp-014 --> model-003   %% Organizacion
  comp-015 --> comp-010    %% PageBanner
  comp-015 --> comp-012    %% AudioReader
  comp-015 --> serv-001    %% SeoService
  comp-015 --> serv-003    %% TextToSpeechService

  %% Aristas - Data → Model
  data-001 --> model-001
  data-002 --> model-002
  data-004 --> data-005
  data-006 --> data-007    %% TELEGRAM_LINKS → ORGANIGRAMA_NACIONAL
  data-006 --> data-008    %% TELEGRAM_LINKS → ORGANIZACIONES_DATA
  data-008 --> model-003   %% ORGANIZACIONES_DATA → Organizacion
  data-009 --> model-004   %% ARCHIVOS_DATA → ArchivoDocumento

  %% Aristas - Config → componentes
  cfg-001 --> cfg-002
  cfg-002 --> comp-004
  cfg-002 --> comp-011
  cfg-002 --> comp-005
  cfg-002 --> comp-009
  cfg-002 --> comp-013
  cfg-002 --> comp-014
  cfg-002 --> comp-015
  cfg-002 --> comp-008
  cfg-002 --> comp-006

  %% Aristas - Entry → app
  entry-001 --> comp-001
  entry-001 --> cfg-001
```

## Nodos

| ID | Nombre | Tipo | Fan-in | Fan-out |
|----|--------|------|--------|---------|
| comp-001 | App | component | 1 | 3 |
| comp-002 | Topbar | component | 1 | 2 |
| comp-003 | Footer | component | 1 | 1 |
| comp-004 | Home | component | 1 | 0 |
| comp-005 | Transparencia | component | 1 | 5 |
| comp-006 | PageNotFound | component | 1 | 0 |
| comp-007 | EmptyState | component | 0 | 0 |
| comp-008 | UnderConstruction | component | 1 | 0 |
| comp-009 | Reglamento | component | 1 | 3 |
| comp-010 | PageBanner | component | 3 | 0 |
| comp-011 | Manifiesto | component | 1 | 4 |
| comp-012 | AudioReader | component | 2 | 1 |
| comp-013 | Archivo | component | 1 | 9 |
| comp-014 | Estructura | component | 1 | 3 |
| comp-015 | Propuesta | component | 1 | 4 |
| serv-001 | SeoService | service | 4 | 0 |
| serv-002 | DarkModeService | service | 2 | 0 |
| serv-003 | TextToSpeechService | service | 3 | 0 |
| model-001 | Entidad | model | 3 | 0 |
| model-002 | Reglamento | model | 1 | 0 |
| model-003 | Organizacion | model | 2 | 0 |
| model-004 | ArchivoDocumento | model | 1 | 0 |
| data-001 | MEXICO | data | 3 | 1 |
| data-002 | REGLAMENTO_DATA | data | 1 | 1 |
| data-003 | SOCIAL_NETWORKS | data | 3 | 0 |
| data-004 | TOP_MENU | data | 1 | 1 |
| data-005 | MenuItem | data | 1 | 0 |
| data-006 | TELEGRAM_LINKS | data | 2 | 2 |
| data-007 | ORGANIGRAMA_NACIONAL | data | 1 | 0 |
| data-008 | ORGANIZACIONES_DATA | data | 2 | 1 |
| data-009 | ARCHIVOS_DATA | data | 1 | 1 |
| data-010 | PROCEDIMIENTOS_DATA | data | 1 | 0 |
| data-011 | RUTA_CRITICA_DATA | data | 1 | 0 |
| cfg-001 | AppConfig | config | 2 | 1 |
| cfg-002 | AppRoutes | config | 2 | 8 |
| entry-001 | Main | entry | 0 | 2 |

## Aristas

| Origen | Destino | Tipo |
|--------|---------|------|
| comp-001 | comp-002 | import |
| comp-001 | comp-003 | import |
| comp-001 | serv-002 | import |
| comp-002 | data-004 | import |
| comp-002 | serv-002 | import |
| comp-003 | data-003 | import |
| comp-005 | comp-010 | import |
| comp-005 | data-003 | import |
| comp-005 | serv-001 | import |
| comp-005 | data-001 | import |
| comp-005 | model-001 | import |
| comp-009 | data-002 | import |
| comp-009 | data-001 | import |
| comp-009 | model-001 | import |
| comp-011 | comp-010 | import |
| comp-011 | comp-012 | import |
| comp-011 | serv-001 | import |
| comp-011 | serv-003 | import |
| comp-012 | serv-003 | import |
| comp-013 | data-006 | import |
| comp-013 | data-008 | import |
| comp-013 | data-009 | import |
| comp-013 | data-011 | import |
| comp-013 | data-001 | import |
| comp-013 | data-003 | import |
| comp-013 | serv-001 | import |
| comp-013 | model-003 | import |
| comp-014 | data-008 | import |
| comp-014 | data-010 | import |
| comp-014 | model-003 | import |
| comp-015 | comp-010 | import |
| comp-015 | comp-012 | import |
| comp-015 | serv-001 | import |
| comp-015 | serv-003 | import |
| cfg-001 | cfg-002 | import |
| cfg-002 | comp-004 | route |
| cfg-002 | comp-011 | route |
| cfg-002 | comp-005 | route |
| cfg-002 | comp-009 | route (lazy) |
| cfg-002 | comp-013 | route (lazy) |
| cfg-002 | comp-014 | route (lazy) |
| cfg-002 | comp-015 | route (lazy) |
| cfg-002 | comp-008 | route |
| cfg-002 | comp-006 | route |
| entry-001 | comp-001 | import |
| entry-001 | cfg-001 | import |
| data-001 | model-001 | import |
| data-002 | model-002 | import |
| data-004 | data-005 | import |
| data-006 | data-007 | resolve |
| data-006 | data-008 | resolve |
| data-008 | model-003 | import |
| data-009 | model-004 | import |
