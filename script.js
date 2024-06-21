// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Crear elemento de audio
    var audio = new Audio('loadsoundtrident.mp3'); // Ruta al archivo de sonido

    // Función para reproducir el sonido
    function playSound() {
        // Reproducir el sonido solo si aún no ha sido reproducido
        if (!audio.paused) {
            audio.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
        }
        audio.play();
    }

    // Agregar evento click al documento para reproducir el sonido
    document.addEventListener('click', playSound);

    // Simular tiempo de carga (ajustado a 4 segundos)
    setTimeout(function() {
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
