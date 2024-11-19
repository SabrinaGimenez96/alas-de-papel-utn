# TP Final UTN - Alas de papel

Este proyecto es una página web e-commerce de venta de libros creada con **Vite** y **React** como parte de un trabajo final. La aplicación incluye un sistema de autenticación (Login), una página de inicio y una vista detallada del libro seleccionado.

## Características

- **Autenticación con Firebase**: Sistema de login para usuarios.
- **Página de Inicio**: Muestra una lista de productos.
- **Detalle de Producto**: Permite ver información detallada del producto seleccionado.

---

## Requisitos

Antes de comenzar, asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <url-del-repositorio>
   cd tp-final-utn

2. Instala las dependencias:
  npm install

3. Crea un archivo .env en la raíz del proyecto con las configuraciones de Firebase:
  VITE_FIREBASE_API_KEY=<tu_api_key>
  VITE_FIREBASE_AUTH_DOMAIN=<tu_auth_domain>
  VITE_FIREBASE_PROJECT_ID=<tu_project_id>
  VITE_FIREBASE_STORAGE_BUCKET=<tu_storage_bucket>
  VITE_FIREBASE_MESSAGING_SENDER_ID=<tu_messaging_sender_id>
  VITE_FIREBASE_APP_ID=<tu_app_id>

4. Inicia el servidor de desarrollo:
  npm run dev: Inicia el servidor de desarrollo.
  npm run build: Genera una versión optimizada para producción.
  npm run preview: Sirve la versión optimizada en un entorno local.
  npm run lint: Ejecuta ESLint para encontrar problemas en el código.

---

Tecnologías Utilizadas

    React: Biblioteca para construir interfaces de usuario.
    React Router DOM: Navegación entre páginas.
    Firebase: Backend para autenticación y base de datos.
    Vite: Herramienta de desarrollo para construir aplicaciones web rápidas.
    ESLint: Linter para mantener la calidad del código.

---

Licencia

Este proyecto es de uso exclusivo para fines educativos.


