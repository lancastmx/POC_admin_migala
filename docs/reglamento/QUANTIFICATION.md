---
zk_id: reg-quant
title: "Cuantificación y Métricas del Reglamento Nacional"
type: quantification
tags: [reglamento, cuantificacion, metricas, estadisticas, analisis]
author: lanca
created: 2026-06-09
updated: 2026-06-09
collection: poc-admin-migala
path: docs/reglamento/
---

# Cuantificación del Reglamento Nacional Proyecto Migala

Análisis estadístico integral del reglamento extrayendo cada elemento cuantificable.

---

## 1. Métricas Generales del Documento

| Métrica | Valor |
|---------|-------|
| **Total de Títulos** | 8 |
| **Total de Capítulos** | ~44 |
| **Total de Artículos** | ~162 |
| **Total de palabras (aprox.)** | ~21,500 |
| **Líneas en el archivo de datos** | 1,061 |
| **Objetos JSON en el grafo de datos** | 1,057 (1 raíz + 8 títulos + ~44 capítulos + ~162 artículos + ~842 nodos de contenido) |
| **Profundidad máxima del árbol** | 4 niveles (Reglamento → Título → Capítulo → Artículo) |

---

## 2. Distribución por Título

| Título | Capítulos | Artículos | % del Total | Peso Relativo |
|--------|:---------:|:---------:|:-----------:|:-------------:|
| **TÍTULO PRIMERO** — Generalidades | 4 | 9 | 5.6% | Bajo |
| **TÍTULO SEGUNDO** — Documentos Básicos | 1 | 1 | 0.6% | Mínimo |
| **TÍTULO TERCERO** — Organización y Funciones | 15 | 84 | 51.9% | **Máximo** |
| **TÍTULO CUARTO** — Sesiones y Reuniones | 6 | 12 | 7.4% | Medio |
| **TÍTULO QUINTO** — Votaciones y Acuerdos | 2 | 7 | 4.3% | Bajo |
| **TÍTULO SEXTO** — Información y Almacenamiento | 2 | 8 | 4.9% | Bajo |
| **TÍTULO SÉPTIMO** — Conductas y Sanciones | 3 | 9 | 5.6% | Medio |
| **TÍTULO OCTAVO** — Proyectos y Modificaciones | 3 | 13 | 8.0% | Medio |
| **ÍNDICE + TRANSITORIOS** | — | 6 | 3.7% | Bajo |
| **Duplicado (Índice repetido)** | — | ~13 | 8.0% | — |

> **Observación importante:** El TÍTULO TERCERO representa **más de la mitad** del reglamento (51.9%), reflejando que la prioridad normativa es la **estructura organizacional**.

---

## 3. Cuantificación de la Estructura Organizacional

### 3.1 Los 4 Ejes

| Eje | Descripción | Entidades |
|:---:|-------------|:---------:|
| **Territorial** | 32 Comisiones Estatales | 32 |
| **Especializado** | 6 Comisiones Temáticas | 6 |
| **Transversalidad** | 6 Grupos Transversales | 6 |
| **Operativo** | 11 Órganos Garantes | 11 |
| **Total** | — | **55** |

### 3.2 Las 11 Áreas del Eje Operativo

| # | Área | Sub-órganos | Artículos |
|:-:|------|:-----------:|:---------:|
| 1 | Dirección | 3 (Coord. Gral., Voceros, Recaudación) | 12 (Arts. 22-33 → Coord. Gral.; 34-38 → Voceros; 39-42 → Recaudación) |
| 2 | Formación (CONFU) | 3 (Manifiesto, Talleres, Estudios) | 6 (Arts. 43-48) |
| 3 | Administración | 4 (Coord., Gestión Proyectos, Orientación, Com. Interna, Coord. y Seguim.) | 6 (Arts. 49-54) |
| 4 | Transparencia | 2 (Comité, Lupa Ciudadana) | 3 (Arts. 55-57) |
| 5 | Contraloría | 3 (Auditoría, Investigación, Sancionador) | 5 (Arts. 58-62) |
| 6 | Comunicación | 3 (GPI, Redacción, Noticiero, Diseño) | 5 (Arts. 63-67) |
| 7 | Informática | 2+4+4 (Programadores 4 mesas, Estrategia Digital 2 mesas) | 9 (Arts. 68-76) |
| 8 | Político Electoral | 1 (Comité) | 5 (Arts. 77-81) |
| 9 | Financiera | 5 (Tesorería, Contabilidad, Ingresos, Egresos, Glosa, Proveeduría) | 7 (Arts. 82-88) |
| 10 | Legal | 3 (Jurídico, Estatutos, Sociedades) | 4 (Arts. 89-92) |
| 11 | Diálogo y Arbitraje | 3 (Conciliación, Arbitraje, Investigación) | 3 (Arts. 93-95) |
| | **Total** | **~38 sub-órganos** | **65 artículos** |

### 3.3 Órganos por Área

```
Dirección        ████████████████████████████    3
Formación        ████████████████████████████    3
Administración   ██████████████████████████████████████████    5
Transparencia    ██████████████████    2
Contraloría      ████████████████████████████    3
Comunicación     ████████████████████████████    3
Informática      ████████████████████████████████████████████████████    6
Político Elect.  ██████████    1
Financiera       ███████████████████████████████████████████████████████████    6
Legal            ████████████████████████████    3
Diálogo y Arb.   ████████████████████████████    3
```

---

## 4. Cuantificación de Miembros

### 4.1 Tipos de Miembros

| Tipo | Voz | Voto | Propuestas | Candidato | Titularidad | Requisitos |
|:----:|:---:|:----:|:----------:|:---------:|:-----------:|:----------:|
| **Simpatizante** | ✅ | ❌ | ✅ | ❌ | ❌ | 4 requisitos |
| **Afiliado** | ✅ | ✅ | ✅ | ✅ | ✅ | 8 requisitos |

### 4.2 Requisitos para Afiliación
1. Leer documentos básicos (Reglamento, Manifiesto, Ruta Crítica)
2. Cursar talleres CONFU
3. Ser mayor de 18 años
4. Ser mexicano de nacimiento
5. Contar con INE vigente
6. Estar en Padrón de Afiliados
7. Formar parte de Comisión Estatal territorial
8. Formar parte de mínima 1 Comisión Temática

### 4.3 Plataformas Obligatorias
1. Telegram de comisión estatal
2. YouTube oficial (nacional + estatal)

---

## 5. Cuantificación de Votaciones

### 5.1 Tipos de Votación

| Tipo | Duración | Plataformas | Propósito |
|:----:|:--------:|:-----------:|-----------|
| **Económica** | ≤ 2 min | Jitsi, Telegram, Mano Alzada | Decisiones rápidas en sesión |
| **Larga** | 5-7 días naturales | Telegram, Google Forms | Decisiones profundas con máxima participación |

### 5.2 Métodos de Votación
1. **Jitsi Polls** — Encuestas integradas en videoconferencia
2. **Telegram Polls** — Encuestas en sub-chat `#Votaciones`
3. **Mano Alzada** — Presencial o virtual (emojis/chat)
4. **Google Forms** — Cuestionarios formales

---

## 6. Cuantificación de Sesiones

| Tipo de Sesión | Acuerdos | Grabación | Alcance |
|:--------------:|:--------:|:---------:|:--------|
| **Ordinaria** | ✅ Sí | ✅ Obligatoria | Base organizacional |
| **Extraordinaria** | ✅ Sí | ✅ Obligatoria | Temas no-estructurales |
| **Reunión de trabajo** | ❌ No | ❌ No necesaria | Lluvia de ideas, borradores |
| **Conversatorio** | ❌ No | ✅ Sí (YouTube) | Formación abierta |

### Requisitos para Sesión Formal (7)
1. Orden del día
2. Tiempo de convocatoria mínimo cumplido
3. Al menos 1 titular presente
4. Grabación pública en YouTube
5. Minuta escrita en documento editable
6. Moderador designado
7. Demás requisitos de reglamentos internos

---

## 7. Cuantificación de Conductas Prohibidas

### 7.1 Competencia de Contraloría (8 conductas)

| # | Conducta | Descripción |
|:-:|----------|-------------|
| I | Hostigar | Asedio reiterado abusando de subordinación |
| II | Revelar datos personales/sensibles | Sin autorización del propietario |
| III | Incumplir obligaciones de Roles | Asumir facultades que no competen |
| IV | Sabotaje administrativo | Cualquier tipo |
| V | Malversación de recursos | Uso indebido |
| VI | Nepotismo | Beneficio personal/familiar clandestino |
| VII | Centralizar dirección | Romper horizontalidad |
| VIII | "Ponerse la camiseta" / Burnout | Exigencia sin justificación |

### 7.2 Competencia de Diálogo y Arbitraje (7 conductas)

| # | Conducta |
|:-:|----------|
| I | Acoso |
| II | Discriminación |
| III | Violencia política de género |
| IV | Difamación y calumnias |
| V | Discursos de odio |
| VI | Abuso de confianza |
| VII | Suplantación de identidad |

---

## 8. Cuantificación de Sanciones

| # | Sanción | Gravedad | Reversibilidad |
|:-:|---------|:--------:|:--------------:|
| I | Investigación + trabajo temático | Leve | ✅ |
| II | Disculpa privada/pública | Leve-Media | ✅ |
| III | Silencio en chats | Media | ✅ |
| IV | Suspensión temporal de derechos | Grave | ✅ (con condiciones) |
| V | Expulsión | Máxima | ❌ (proceso de reintegración) |

### Proceso Sancionatorio
```
Falta → Conciliación (reg-022) [opcional] → Investigación (reg-016) → Sanción → Apelación (reg-010)
```

---

## 9. Cuantificación de la Reforma Reglamentaria

### 9.1 Procedimiento de Modificación (6 pasos)
1. Solicitud por escrito del afiliado
2. Señalar parte exacta (Título, Capítulo, Artículo, Fracción)
3. Enviar a Área Legal + Administración
4. Análisis y prevención (30 días estimados)
5. Aprobación/Prevención/Rechazo fundado y motivado
6. Coordinación General debate, aprueba e incorpora (público en YouTube)

### 9.2 Causales de Rechazo (7)
1. Falta de claridad
2. Falta de coherencia
3. Afecta integridad de miembros
4. No apegado al Manifiesto
5. Contraviene derecho mexicano o tratados internacionales
6. Perjuicio por problemas personales
7. Beneficio individual manifiesto

---

## 10. Cuantificación de Información Pública

| # | Documento Público |
|:-:|-------------------|
| I | Redes Sociales |
| II | Organigrama |
| III | Directorio |
| IV | Sesiones |
| V | Órdenes del Día |
| VI | Minutas de Sesiones |
| VII | Conversatorios |
| VIII | Trámites y Formatos |
| IX | Calendario de Actividades |
| X | Listado de Patrimonio |
| XI | Ingresos y Egresos |
| XII | Padrón de miembros |
| XIII | Informes de Resultados |
| XIV | Lista de interesados a titulares |
| XV | Avisos de privacidad |
| XVI | Reglamentos |
| XVII | Manifiesto |
| XVIII | Ruta Crítica |

**Total: 18 documentos públicos obligatorios**

### Plataformas de Almacenamiento
1. Notion o página web
2. YouTube oficial
3. Telegram
4. Plataformas de respaldo en nube pública
5. Dispositivos físicos (con lineamientos)

---

## 11. Cuantificación de Alianzas

| Tipo de Alianza | Aprobación | Vinculante |
|:---------------:|:----------:|:----------:|
| **Nacional** | Coordinación General + Visto Bueno Comité Político Electoral | ✅ |
| **Estatal** | 2/3 de afiliados de la Comisión Estatal | ✅ |
| **Opinión Político Electoral (estatal)** | Comité Político Electoral | ❌ (No vinculante) |

---

## 12. Línea de Tiempo Reglamentaria (Transitorios)

| Evento | Plazo |
|--------|:-----:|
| Validación inicial del reglamento | CPN 2.0 |
| Órganos existentes elaboran reglamentos internos | 2 meses desde aprobación CPN |
| Órganos de primera creación elaboran reglamentos | 2 meses desde 1ª Sesión Ordinaria |
| Contraloría, Tesorería, Diálogo, Legal entran en funciones | 2 meses desde formación de Coordinación General |
| Convocatoria Coordinación General | Cuando Área Político Electoral acuerde |
| Vigencia del reglamento | Hasta creación de Asociación Civil → Partido |

---

## 13. Indicadores Clave (KPIs) del Reglamento

| KPI | Fórmula | Valor Actual |
|-----|---------|:-----------:|
| **Complejidad normativa** | Artículos / Títulos | 20.25 arts./título |
| **Peso organizacional** | Arts. Título III / Total | 51.9% |
| **Densidad de órganos** | Órganos totales / Áreas | 3.45 órganos/área |
| **Cobertura de principios** | Principios rectores | 7 principios |
| **Rigidez sancionatoria** | Sanciones graves / total | 2/5 (40%) |
| **Transparencia** | Documentos públicos obligatorios | 18 |
| **Participación** | Tipos de votación × métodos | 2 × 4 = 8 combinaciones |
| **Federalismo interno** | Libertad estatal / sujeción nacional | Balance (reg-099, reg-102) |

---

## 14. Matriz de Correlación Cuantitativa

| Variable | Arts. | Subórganos | Sanciones | Conexiones |
|----------|:----:|:----------:|:---------:|:----------:|
| Dirección | 12 | 3 | 0 | Alta |
| Contraloría | 5 | 3 | 5 | Alta |
| Administración | 6 | 5 | 0 | Muy Alta |
| Financiera | 7 | 6 | 0 | Media |
| Comisiones Estatales | 11 | 0 | 0 | Muy Alta |
| Conductas Prohibidas | 6 | 0 | 15 | Alta |

---

→ [[INDEX]] — Volver al índice general
→ [[GRAPH]] — Ver análisis de grafo
