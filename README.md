# Proyecto Integrador M1 — Generador de Paletas de Colores

**Estudiante:** Walter Rosas  
**Versión:** Final — Fase 4

## Descripción

Aplicación web interactiva para crear y explorar paletas de colores. Permite generar combinaciones aleatorias, bloquear colores para conservarlos, cambiar la cantidad de colores y alternar entre formatos HEX y HSL.

## Funcionalidades

- Generación de paletas de 6, 9 o 12 colores.
- Generación de colores aleatorios.
- Bloqueo y desbloqueo de colores.
- Visualización de valores HEX y HSL.
- Copia del código de color al portapapeles.
- Edición del nombre de la paleta.
- Guardado de paletas en `localStorage`.
- Exportación de paletas como archivo JSON.
- Historial para deshacer y rehacer.
- Atajo de teclado con la barra espaciadora.
- Diseño responsive.

## Tecnologías

HTML5, CSS3 y JavaScript Vanilla. Se utilizan las APIs del navegador `localStorage`, Clipboard y Blob.

## Estructura

```text
ProyectoM1_WalterRosas/
├── .github/
│   └── workflows/
│       └── pages.yml
├── js/
│   └── app.js
├── index.html
├── styles.css
└── README.md
```

## Ejecución local

Abre la carpeta en Visual Studio Code y ejecuta `index.html` en un navegador. También puedes utilizar Live Server. No requiere dependencias ni instalación de paquetes.

## Publicación en GitHub Pages

El repositorio incluye un workflow de GitHub Actions para publicar el contenido de la raíz. Sube los cambios a la rama `main`, verifica que el workflow termine correctamente en **Actions** y consulta la URL en **Settings → Pages**.

## Notas

Las paletas guardadas se almacenan en el navegador mediante `localStorage`; quedan disponibles en ese mismo navegador y dispositivo. La exportación descarga un archivo JSON con el nombre y los colores de la paleta.
# Proyecto Integrador M1 — Generador de Paletas de Colores

**Estudiante:** Walter Rosas  
**Proyecto:** Generador de Paletas de Colores Interactivo  
**Estado:** Proyecto finalizado — Fase 4

## Descripción general

El proyecto consiste en el desarrollo de una aplicación web interactiva para generar, explorar y administrar paletas de colores aleatorias.

Se desarrolló progresivamente durante cuatro fases, aplicando los conocimientos adquiridos en HTML, CSS y JavaScript. Cada etapa incorporó nuevas funcionalidades y mejoras hasta completar una aplicación funcional, adaptable y dinámica.

## Desarrollo por fases

### Fase 1 — Estructura inicial

Se establecieron las bases del proyecto mediante la creación de su estructura HTML y los primeros elementos de la interfaz.

**Objetivos trabajados:**
- Creación del documento HTML.
- Organización de la estructura y contenido.
- Incorporación de los elementos principales de la aplicación.
- Preparación de los archivos del proyecto.

### Fase 2 — Diseño y presentación visual

Se incorporaron los estilos CSS para transformar la estructura inicial en una interfaz visual organizada y adaptable.

**Objetivos trabajados:**
- Aplicación de estilos y colores.
- Organización de los elementos mediante CSS.
- Diseño de las tarjetas de colores.
- Distribución visual de la paleta.
- Adaptación responsive para distintos dispositivos.

### Fase 3 — Generador interactivo

Se incorporó JavaScript para dar funcionalidad a la aplicación y permitir la generación dinámica de combinaciones de colores.

**Objetivos trabajados:**
- Generación aleatoria de colores.
- Manipulación del DOM.
- Actualización dinámica de las tarjetas.
- Visualización de códigos HEX.
- Interacción mediante eventos.
- Organización de funciones y lógica JavaScript.

### Fase 4 — Versión final y funcionalidades avanzadas

Se completó la aplicación incorporando herramientas para administrar, personalizar y exportar las paletas generadas.

**Funcionalidades incorporadas:**
- Generación de paletas de 6, 9 y 12 colores.
- Generación de combinaciones aleatorias.
- Bloqueo y desbloqueo individual de colores.
- Conversión y visualización de formatos HEX y HSL.
- Copia de códigos de colores al portapapeles.
- Personalización del nombre de las paletas.
- Guardado de paletas mediante `localStorage`.
- Exportación de paletas en formato JSON.
- Historial de acciones con opciones para deshacer y rehacer.
- Generación de paletas mediante la barra espaciadora.
- Mejoras de diseño y adaptación responsive.

## Tecnologías utilizadas

| Tecnología | Aplicación |
|---|---|
| HTML5 | Estructura de la aplicación. |
| CSS3 | Diseño visual y responsive. |
| JavaScript | Lógica e interactividad. |
| DOM | Manipulación dinámica del contenido. |
| LocalStorage | Almacenamiento local de paletas. |
| Clipboard API | Copia de códigos de color. |
| Blob API | Generación de archivos JSON. |
| Git | Control de versiones. |
| GitHub | Repositorio y publicación. |
| GitHub Pages | Despliegue de la aplicación. |

## Estructura del proyecto

```text
ProyectoM1_WalterRosas/
├── .github/
│   └── workflows/
│       └── pages.yml
├── Documentacion/
│   └── capturas/
├── js/
│   └── app.js
├── index.html
├── styles.css
├── README.md
└── .gitignore
```

## Descripción de los archivos

- **index.html:** contiene la estructura principal de la aplicación.
- **styles.css:** contiene los estilos, diseño visual y reglas responsive.
- **js/app.js:** contiene la lógica de generación de colores, eventos, historial, almacenamiento y exportación.
- **README.md:** documentación del proyecto y sus cuatro fases.
- **.github/workflows/pages.yml:** configura la publicación automática mediante GitHub Actions.
- **Documentacion/capturas/:** contiene evidencias visuales del desarrollo.

## Instalación y ejecución local

El proyecto no requiere instalación de dependencias adicionales.

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir el archivo `index.html` en un navegador.
4. Opcionalmente, utilizar Live Server para ejecutar el proyecto desde Visual Studio Code.

## Instrucciones de uso

1. Abrir la aplicación y visualizar la paleta inicial.
2. Seleccionar la cantidad de colores deseada.
3. Generar nuevas combinaciones.
4. Bloquear los colores que se quieran conservar.
5. Cambiar entre formatos HEX y HSL.
6. Copiar los códigos de color haciendo clic sobre ellos.
7. Personalizar el nombre de la paleta.
8. Guardar las paletas en el navegador.
9. Exportar las combinaciones en formato JSON.
10. Utilizar las opciones de deshacer y rehacer.

**Atajo de teclado:** barra espaciadora para generar una nueva paleta.

## Almacenamiento y exportación

Las paletas guardadas utilizan `localStorage`, por lo que permanecen almacenadas en el navegador y dispositivo donde se creó la información.

La función de exportación permite descargar un archivo JSON con el nombre de la paleta y los valores de sus colores en formatos HEX y HSL.

## Publicación del proyecto

El proyecto se encuentra preparado para su publicación mediante GitHub Pages y GitHub Actions.

Para actualizar la versión publicada:

```bash
git add .
git commit -m "feat: completar proyecto integrador fase 4"
git push origin main
```

La publicación se ejecuta automáticamente mediante el workflow configurado en el repositorio.

## Objetivos de aprendizaje alcanzados

A través de las cuatro fases se aplicaron y reforzaron los siguientes conocimientos:

- Estructuración de documentos con HTML5.
- Diseño y organización visual con CSS3.
- Uso de variables, funciones y estructuras de control en JavaScript.
- Manipulación del DOM.
- Manejo de eventos e interacciones.
- Uso de APIs del navegador.
- Almacenamiento de información en el navegador.
- Organización de archivos y estructura de proyectos.
- Control de versiones mediante Git.
- Administración de repositorios en GitHub.
- Publicación de aplicaciones web con GitHub Pages.

## Conclusión

El desarrollo del Generador de Paletas de Colores permitió evolucionar desde una estructura web básica hasta una aplicación interactiva con funcionalidades avanzadas.

Cada fase representó un avance en la aplicación práctica de los conocimientos adquiridos durante el módulo, integrando HTML, CSS y JavaScript en un proyecto funcional.

---

**Proyecto Integrador M1 — Walter Rosas**