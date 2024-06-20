// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Crear elemento de audio
    var audio = new Audio('loadsoundtrident.mp3'); // Ruta al archivo de sonido

    // Simular tiempo de carga (ajustado a 4 segundos)
    setTimeout(function() {
        // Reproducir sonido al finalizar la carga
        audio.play();

        // Ocultar overlay de carga
        var overlay = document.querySelector('.overlay');
        overlay.classList.add('fade-out');

        // Detectar final de animación de fade-out
        overlay.addEventListener('animationend', function() {
            // Ocultar completamente el overlay
            overlay.style.display = 'none';
        });
    }, 4000); // Tiempo de carga simulado en milisegundos (4000 = 4 segundos)
});
