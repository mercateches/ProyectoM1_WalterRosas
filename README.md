# Generador de Paletas de Colores

## Descripción

Generador de Paletas de Colores es una aplicación web estática desarrollada como proyecto integrador del Módulo 1 de Full Stack.

El proyecto permite generar paletas de seis colores aleatorios, visualizar sus códigos HEX y copiarlos al portapapeles. Su desarrollo se realizó progresivamente, incorporando estructura HTML, estilos CSS y funcionalidades interactivas mediante JavaScript.

## Estado del proyecto

**Fase 1: Estructura inicial y muestra estática**

Se desarrolló la estructura inicial de la aplicación utilizando HTML y CSS, presentando una muestra de color azul índigo (`#414DE8`) junto con sus valores de referencia.

**Fase 2: Paleta dinámica**

Se incorporó JavaScript para generar dinámicamente seis tarjetas de colores a partir de un array de objetos. Cada tarjeta presenta su color y su correspondiente código HEX.

También se implementó una distribución mediante CSS Grid y adaptación responsive para diferentes tamaños de pantalla.

**Fase 3: Generador interactivo**

Se incorporaron funcionalidades para generar colores HEX aleatorios y actualizar dinámicamente las seis tarjetas de la paleta.

Además, se agregó un botón para generar nuevas combinaciones y la posibilidad de copiar códigos HEX al portapapeles, con una confirmación visual temporal.

## Tecnologías utilizadas

- **HTML5:** estructura y contenido de la aplicación.
- **CSS3:** presentación visual, distribución de elementos, CSS Grid y diseño responsive.
- **JavaScript:** generación aleatoria de colores, manipulación del DOM e interacción con el usuario.
- **Git:** control de versiones.
- **GitHub:** alojamiento del repositorio y publicación mediante GitHub Pages.

## Estructura del proyecto

```text
ProyectoM1_WalterRosas/
│
├── .github/
│   └── workflows/
│       └── pages.yml
│
├── Documentacion/
│   └── capturas/
│
├── js/
│   └── app.js
│
├── index.html
├── styles.css
├── .gitignore
└── README.md
```

## Funcionalidades incluidas

- Generación de una paleta de seis colores.
- Generación aleatoria de componentes RGB.
- Conversión de valores RGB a códigos HEX.
- Actualización dinámica de los colores mediante JavaScript.
- Botón para generar nuevas paletas.
- Visualización de códigos HEX debajo de cada color.
- Copiado de códigos HEX al portapapeles.
- Confirmación visual temporal al copiar un color.
- Diseño adaptable a diferentes tamaños de pantalla.

## Conceptos de programación aplicados

Durante el desarrollo se trabajó con los siguientes conceptos:

- Declaración de variables y constantes.
- Arrays y objetos.
- Funciones y valores de retorno.
- Métodos `Math.random()` y `Math.floor()`.
- Conversión numérica mediante `toString(16)`.
- Formateo de cadenas con `padStart()`.
- Template literals.
- Manipulación del DOM.
- Creación dinámica de elementos HTML.
- Recorrido de elementos mediante `forEach()`.
- Eventos con `addEventListener()`.
- API Clipboard para copiar información.
- Programación asíncrona mediante `async` y `await`.
- Manejo de errores mediante `try...catch`.

## Ejecución local

La aplicación no requiere instalación de dependencias ni servidor backend.

Para visualizarla localmente:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Iniciar la aplicación abriendo `index.html` en un navegador o utilizando la extensión Live Server.

Se recomienda utilizar Live Server durante el desarrollo para facilitar la actualización y visualización de los cambios.

## Publicación

El proyecto está configurado para publicarse mediante GitHub Pages.

La configuración de publicación utiliza la carpeta raíz del repositorio como origen del sitio y GitHub Actions para ejecutar el flujo de despliegue.

**Repositorio:**  
https://github.com/mercateches/ProyectoM1_WalterRosas

**Aplicación publicada:**  
https://mercateches.github.io/ProyectoM1_WalterRosas/

## Documentación visual

### Fase 1 — Estructura inicial

Primera versión de la aplicación con una muestra estática de color.

### Fase 2 — Paleta dinámica

Implementación de seis tarjetas de colores generadas mediante JavaScript y distribución responsive.

### Fase 3 — Generador interactivo

Incorporación de generación aleatoria de colores HEX, actualización dinámica de la paleta y copiado de códigos al portapapeles.


## Próximas etapas

Las siguientes funcionalidades podrán incorporarse progresivamente:

- Bloqueo individual de colores seleccionados.
- Generación de paletas basadas en armonías cromáticas.
- Guardado de paletas favoritas mediante `localStorage`.
- Exportación de paletas.
- Opciones adicionales de formato y gestión de colores.

## Autor

**Walter Rosas**

Proyecto integrador — Full Stack, Módulo 1.