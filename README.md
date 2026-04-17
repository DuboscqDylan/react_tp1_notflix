# 🎬 NOT-FLIX - Gestor de Películas y Series

## 📚 Programación Web Avanzada - UNCo

### 👥 Integrantes
- Dylan Duboscq - FAI-1967
- Lucas Gabriel Cerda - FAI-2748
- Cyntia Nasabun - 119744

---

## 📌 Descripción

NOT-FLIX es una aplicación desarrollada en React que permite gestionar películas y series.

El usuario puede:
- ➕ Agregar nuevas películas o series
- ✏️ Editar peliculas o series
- 🗑️ Borrar peliculas o series
- 👁️ Marcar contenido como visto o no visto
- 🔍 Buscar por título o director
- 🎭 Filtrar por género y tipo
- 📊 Ordenar por año o rating
- 🔖 Visualizar listas separadas (Vistas / Por ver)


Los datos se almacenan en **localStorage**, por lo que no se pierden al recargar la página.

---

## 🧩 Tecnologías utilizadas

- React
- JavaScript (ES6)
- CSS Modules
- Vite

---

## 📂 Estructura del proyecto

```bash
src/
│
├── components/
│ ├── button/
│ ├── title/
│ ├── listItems/
│ ├── cardItem/
│ ├── deleteButton/
│ ├── editItemForm/
│ ├── filters/
│ └── formItem/
│
├── pages/
│ └── home/
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx

```
---

## ⚙️ Archivos principales

### 📄 main.jsx (index.js)
Es el punto de entrada de la aplicación. Renderiza el componente principal `App`.

### 📄 App.jsx
Componente raíz. Renderiza la página principal (`Home`).

### 📄 index.css
Define los estilos globales de la aplicación.

### 📄 package.json
Contiene las dependencias del proyecto y scripts como:
- `npm run dev`
- `npm install`

### 📄 vite.config.js
Contiene la configuracion Vite, donde se define como se ejecuta  y construye el proyecto

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone [https://github.com/DuboscqDylan/react_tp1_notflix.git]
```

2. Entrar a la carpeta

```bash
cd react_tp1_notflix
```
3. Instalar dependencias
   
```bash
npm install
```
4. Instalar reac-icons 
   
```bash
npm install react-icons
```
5. Ejecutar la aplicación

```bash
npm run dev
```

6. Abrir el navegador
   
```bash
http://localhost:5173
```
---
## Información técnica React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## 🧠 Funcionalidades implementadas

✔️ Renderizado de listas con .map()

✔️ Renderizado condicional (listas vacías)

✔️ Componentes reutilizables

✔️ Manejo de estado con useState

✔️ Persistencia con localStorage

✔️ Filtros dinámicos

✔️ Formulario para agregar contenido

---
## 📸 Capturas

![alt text](../react_tp1_notflix/public/image/image.png)

---
## 📝 Notas

Se utilizó una arquitectura basada en componentes reutilizables.

Se aplicaron buenas prácticas de separación de responsabilidades.

Se utilizó CSS Modules para evitar conflictos de estilos.

---
## 📌 Linear

👉 [https://linear.app/pwa-cerda-duboscq/team/PWA/all]

---
## 🔗 Repositorio

👉 [https://github.com/DuboscqDylan/react_tp1_notflix#]

## 📌 Vercel 

👉 [https://react-tp1-notflix-git-main-duboscqdylans-projects.vercel.app/]