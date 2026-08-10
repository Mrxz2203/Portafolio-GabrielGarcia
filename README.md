# Mi Portafolio Personal

Portafolio web personal desarrollado en **React**, diseñado para presentar información profesional: perfil, experiencia laboral, habilidades técnicas y proyectos realizados. Cuenta con una interfaz moderna de una sola página (single-page), animaciones de aparición al hacer scroll y diseño totalmente responsive.

## 🚀 Demo

El sitio está desplegado en Vercel y accesible como portafolio personal (ver botón "Portafolio Personal" dentro del propio sitio).

## 🧩 Tecnologías utilizadas

- **React** (Create React App / componentes funcionales con Hooks)
- **CSS3** puro (sin frameworks de estilos), con variables (`:root`), animaciones (`@keyframes`/`transition`), gradientes y `backdrop-filter`
- **lucide-react** para iconografía (reemplaza los emojis nativos)
- **Google Fonts** — Sora (títulos) + Inter (texto de cuerpo)
- **IntersectionObserver API** (vía hook propio `useInView`) para animaciones al hacer scroll
- Despliegue en **Vercel**

## 📁 Estructura del proyecto

```
src/
├── App.js / App.css              # Componente raíz, ensambla todas las secciones
├── hooks/
│   └── useInView.js              # Hook con IntersectionObserver para reveal-on-scroll
└── components/
    ├── styles/
    │   └── common.css            # Variables de color/tipografía y clases compartidas
    ├── Navbar.js / .css          # Barra de navegación fija con efecto de scroll
    ├── Hero.js / .css            # Sección de bienvenida con foto de perfil y botones de acción
    ├── About.js / .css           # Sección "Acerca de mí"
    ├── Skills.js / .css          # Grid de habilidades técnicas por categoría, en formato de badges/pills
    ├── Experience.js / .css      # Tarjetas de experiencia laboral / prácticas
    ├── Projects.js / .css        # Grid de proyectos realizados con enlaces
    └── Footer.js / .css          # Sección de contacto y navegación inferior
```

## 🖥️ Secciones del sitio

| Sección | Ancla | Descripción |
|---|---|---|
| Inicio | `#inicio` | Presentación con nombre, botón al portafolio y descarga de CV en PDF |
| Acerca de mí | `#acerca` | Resumen académico y profesional, con iconografía flotante (lucide-react) |
| Habilidades | `#habilidades` | Categorías: Frontend, Backend, Bases de Datos, Herramientas de Microsoft Office y Habilidades Blandas, cada una con una breve descripción y sus tecnologías en formato de badges/pills |
| Experiencia | `#experiencia` | Tarjetas con empresa, rol, duración, descripción y tecnologías usadas |
| Proyectos | `#proyectos` | Galería de proyectos con enlace de vista previa (`Ver proyecto →`) |
| Contáctame | `#contacto` | Tarjetas de contacto (LinkedIn, GitHub, Correo) y navegación de cierre |

## ✨ Características

- **Navegación fija (Navbar)** que cambia de estilo (fondo con blur y sombra) al hacer scroll, usando el hook `useState` + `useEffect` y el evento `scroll` del `window`.
- **Botones de scroll animados** al final de cada sección, que llevan suavemente (`scrollIntoView` / `scrollTo` con `behavior: 'smooth'`) a la siguiente.
- **Animaciones de aparición al hacer scroll (reveal-on-scroll)**, implementadas con un hook propio (`useInView`) basado en `IntersectionObserver`: cada tarjeta o pill aparece con una transición suave y escalonada (`transitionDelay`) cuando entra en el viewport, en lugar de animarse toda de golpe al cargar la página.
- **Habilidades en formato de badges/pills** por categoría (sin porcentajes ni barras de progreso), agrupadas con una breve descripción de contexto por categoría.
- **Tarjetas de experiencia** con imagen de constancia/certificado, badge de modalidad (Híbrida/Virtual), duración y tags de tecnologías.
- **Grid de proyectos** con overlay al hacer hover (`Ver proyecto →`) que enlaza a cada proyecto desplegado.
- **Gradientes radiales sutiles y sombras en capas** en las secciones principales (Hero, About, Skills), para dar sensación de profundidad sin recargar el diseño.
- **Sistema de estilos compartido** (`common.css`) con variables CSS para colores y tipografía, y clases reutilizables (`.highlight`, `.scroll-button-down`, `.reveal-on-scroll`), evitando duplicación entre componentes.
- **Totalmente responsive**, con media queries para tablets (`max-width: 968px` / `1024px`) y móviles (`max-width: 600px`).
- Descarga directa del CV en PDF desde la sección de inicio.
- Año de copyright dinámico en el Footer (`{new Date().getFullYear()}`), sin necesidad de actualizarlo a mano.

## 🛠️ Instalación y uso

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd <nombre-del-proyecto>

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start

# Generar build de producción
npm run build
```

El proyecto se abrirá por defecto en `http://localhost:3000`.

## 🖼️ Recursos estáticos

El proyecto espera los siguientes archivos en la carpeta `public/`, referenciados por los componentes:

- `perfil.jpg`, `Desarrollador.png` — imágenes de perfil e ilustración
- `CV_GabrielGarcia.pdf` — CV descargable
- `Logo.png`, `Devlogo.png`, `Constancia.png`, `DevCertificado.jpg` — logos y constancias de experiencia
- `frontend.png`, `backend.png`, `pgadmin.png`, `office.png`, `developer.png` — íconos de categorías de habilidades
- `react.png`, `angular.png`, `html.png`, `java.png`, `python.png`, `c.png`, `server.png`, `mysql.png`, `excel.png`, `word.png`, `powerpoint.png`, `script.png`, `liderazgo.png`, `equipo.png`, `proactividad.png` — íconos individuales de skills
- `Shimbaru.png`, `HelpTask.png`, `Arsenal.png`, `Filmi.png` — capturas de los proyectos mostrados

## 📬 Contacto

- **LinkedIn:** [Gabriel García](https://www.linkedin.com/in/jarold-gabriel-garcia-cartagena-54b80b20b/)
- **GitHub:** [Mrxz2203](https://github.com/Mrxz2203)
- **Correo:** jarold.pamer@gmail.com

---

© 2026 Jarold Gabriel García Cartagena