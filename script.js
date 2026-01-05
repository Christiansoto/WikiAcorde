function cambiarSeccion(id) {
    // 1. Seleccionamos todas las secciones con la clase común
    const secciones = document.querySelectorAll('.seccion-spa');
    
    // 2. Las ocultamos todas quitando la clase de visibilidad
    secciones.forEach(seccion => {
        seccion.classList.remove('seccion-visible');
    });
    
    // 3. Mostramos solo la sección que coincida con el ID seleccionado
    const seccionActiva = document.getElementById(id);
    seccionActiva.classList.add('seccion-visible');
    
    // 4. (Opcional) Ocultar el Header si quieres que la sección ocupe todo
    document.getElementById('header').style.minHeight = '20vh'; 
}

// Para que al cargar la página se vea Rock por defecto
window.onload = () => cambiarSeccion('genero1');