# Guía de Estilos y Optimización (Tailwind CSS v4)

Este documento detalla las convenciones y mejores prácticas para extender el sistema de diseño en `POC_admin_migala` utilizando **Tailwind CSS v4**. El objetivo es mantener el CSS final lo más liviano, rápido y optimizado posible, preparándonos para un crecimiento de más de 1,000 líneas de código.

---

## 1. Estilos Globales vs. Estilos por Página: Rendimiento y Ventajas

Para asegurar que la aplicación cargue lo más rápido posible y reducir la cantidad de CSS innecesario, dividimos el desarrollo visual en dos categorías con distintos objetivos de rendimiento:

### A. Estilos Globales Reutilizables (`src/styles/`)
*   **Qué son:** Variables de colores corporativos, tipografía base, breakpoints, resets de elementos HTML y clases compartidas por el UI Kit (como botones y tarjetas estándar).
*   **Ventajas de rendimiento:** 
    *   **Caché agresiva:** El navegador descarga este archivo CSS único una sola vez al cargar la aplicación y lo almacena en caché. En las siguientes vistas, la carga de estilos globales es instantánea (0ms).
    *   **Consistencia visual:** Garantiza que toda la aplicación comparta la misma base de diseño.
*   **Documentación de referencia:** Consulta el [Catálogo de Estilos Globales](./styles/global_index.md) para ver los tokens y componentes ya existentes. **No modifiques estos estilos a la ligera.**

### B. Estilos Locales por Componente/Página (`.component.css`)
*   **Qué son:** Estilos exclusivos de una sola página o widget (ej: layouts complejos de un panel de control, animaciones en el Login o coordenadas específicas del banner principal).
*   **Ventajas de rendimiento:**
    *   **Carga diferida (Lazy Loading):** Si una página o sección de la app se carga diferida mediante rutas, el CSS de sus componentes **solo se descarga cuando el usuario accede a esa sección**.
    *   **Encapsulamiento nativo (CSS Scoping):** Angular aísla estos estilos de forma automática. Tus clases locales nunca colisionarán ni afectarán a otros elementos del sitio.
*   **Documentación de referencia:** Consulta la [Guía de Estilos de Componentes](./styles/component_styles.md) para aprender a escribir CSS encapsulado correctamente.

---

## 2. Regla de Oro: Evitar CSS Redundante

En Tailwind v4, **todo el CSS que escribas a mano en los archivos globales se incluirá en el bundle final**, independientemente de si se usa o no. Por el contrario, **las clases de utilidad de Tailwind solo se generan si se detectan en tus plantillas HTML o TS** (compilación on-demand).

### Reglas para no inflar el CSS:
- **No escribas CSS personalizado si ya existe una utilidad de Tailwind.** Usa clases como `flex`, `grid`, `gap-4`, `p-6` en lugar de crear nuevas clases en CSS.
- **Usa valores arbitrarios sobre la marcha:** Para estilos de una sola vez, usa la sintaxis inline de Tailwind (ej. `h-[120px]` o `bg-[#342159]`). Esto genera la utilidad en tiempo de compilación y se elimina si dejas de usarla.
- **Evita el uso excesivo de `@apply`:** La directiva `@apply` copia los estilos en el CSS generado, inflando el tamaño del bundle. Es mucho mejor usar las clases directamente en el HTML de los componentes de Angular.

---

## 3. Estructura Modular del CSS

Escribir miles de líneas en un solo archivo `src/styles.css` es ineficiente. Utilizamos la directiva estándar `@import` de CSS para estructurar nuestros estilos de forma modular:

```
src/
└── styles.css               # Punto de entrada principal (imports de Tailwind y módulos)
└── styles/
    ├── theme.css            # Definición de variables (@theme) y modo oscuro
    ├── base.css             # Resets globales y estilos de etiquetas HTML
    ├── utilities.css        # Clases de utilidad personalizadas (@utility)
    ├── components.css       # Índice que importa todos los componentes
    └── components/          # Carpeta para archivos CSS de cada tipo de componente
        └── buttons.css      # Estilos para botones globales (ej. .btn-migala)
```

### Punto de Entrada (`src/styles.css`):
```css
@import 'tailwindcss';

@import './styles/theme.css';
@import './styles/base.css';
@import './styles/utilities.css';
@import './styles/components.css';
```

---

## 4. Configuración de Modo Oscuro Nativo

En Tailwind v4, la configuración del modo oscuro se realiza mapeando directamente las clases de utilidad a las **Propiedades Personalizadas de CSS (CSS Variables)**. En lugar de escribir lógica duplicada para el modo oscuro en cada clase, sobreescribimos los valores de las variables bajo el selector `.dark`:

### En `src/styles/theme.css`:
```css
/* Definición de colores base */
:root {
    --color-background-primary: #ffffff;
    --color-text-primary: #1f2937;
    --color-card-bg: rgba(255, 255, 255, 0.75);
    --color-card-border: rgba(255, 255, 255, 0.2);
}

/* Modificaciones para Modo Oscuro */
.dark {
    --color-background-primary: #121212;
    --color-text-primary: #f9fafb;
    --color-migala: #a59ff0; /* Versión más clara con mejor contraste en fondo oscuro */
    --color-card-bg: rgba(18, 18, 18, 0.75);
    --color-card-border: rgba(255, 255, 255, 0.05);
}
```

### Aplicación en `src/styles/base.css`:
```css
body {
    background-color: var(--color-background-primary);
    color: var(--color-text-primary);
    transition: background-color 0.3s ease, color 0.3s ease; /* Transición suave */
}
```

---

## 5. Cómo Extender el Tema (`@theme`)

Para agregar colores corporativos, tipografía, breakpoints, espaciados o animaciones, agrégalos dentro del bloque `@theme` en `src/styles/theme.css`.

### Extensión de Colores
Define tus variables usando el prefijo `--color-`:
```css
@theme {
    /* Colores del Proyecto Migala */
    --color-migala-light: #ebe9fc;
    --color-migala: #918be5;
    --color-migala-dark: #766fd1;
}
```

### Extensión de Pantallas (Breakpoints)
Define tus variables usando el prefijo `--screen-`:
```css
@theme {
    --screen-xxl: 1440px;
}
```

---

## 6. Cuándo y Cómo Usar `@utility`

Si necesitas un estilo complejo que se repite constantemente en todo el proyecto, defínelo como una utilidad reutilizable con `@utility` en `src/styles/utilities.css`. Esto te permite usarlo con variantes como `hover:`, `md:`, o `dark:`.

```css
@utility card-glass {
    background-color: var(--color-card-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--color-card-border);
}
```
