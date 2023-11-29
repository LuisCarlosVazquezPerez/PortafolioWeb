export default {
    base: './', // Establece el base path como ruta relativa

    build: {
      rollupOptions: {
        input: {
          // main: 'main.js', // Ruta al archivo de entrada principal de tu aplicación
          // reticulas: 'reticulas.html', // Ruta al archivo reticulas.html
          index: 'index.html' // Ruta al archivo reticulas.html
        },
      }
    }
  };
  