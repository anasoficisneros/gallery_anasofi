
 # Califica Mi Galería de Imágenes

Una galería de fotos de gatos hecha con **React** y **Vite**, donde puedes calificar cada imagen con estrellas.

**Ver en línea:** https://carritoreactcomprasanasofi.web.app

---

## ¿Qué hace?

- **Calificar imágenes** del 1 al 5 haciendo clic en las estrellas.
- **Ordenar automáticamente**: las imágenes con mejor calificación se mueven al principio.
- **Calcular el promedio** de todas las calificaciones con un botón.
- **Reiniciar** todas las calificaciones a 0.

---

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting) (para publicarla)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Estructura del proyecto

```
src/
├── assets/            → Fotos de los gatos
├── components/
│   ├── header.jsx       → Título de la página
│   ├── mainSection.jsx  → Galería y lógica de calificaciones
│   ├── Rate.jsx         → Las 5 estrellas de cada imagen
│   ├── Promedio.jsx     → Botón de promedio y reinicio
│   └── footer.jsx       → Pie de página
├── App.jsx
├── main.jsx
└── index.css
```

---

## Cómo correrla en tu computadora

1. Clona el repositorio:
   ```
   git clone https://github.com/anasoficisneros/gallery_anasofi.git
   ```
2. Entra a la carpeta:
   ```
   cd gallery_anasofi
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Inicia la app:
   ```
   npm run dev
   ```
5. Abre en el navegador el link que aparece en la terminal (normalmente `http://localhost:5173`).

---

## Cómo publicarla en Firebase

```
npm run build
firebase deploy
```

---

## Autora

Hecho por **Ana Sofi** 💜
