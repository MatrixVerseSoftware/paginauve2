// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Crear elemento de audio
    var audio = new Audio('loadsoundtrident.mp3'); // Ruta al archivo de sonido

    // Función para reproducir el sonido
    function playSound() {
        // Reproducir el sonido solo si aún no ha sido reproducido
        if (!audio.paused && audio.currentTime > 0) {
            audio.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
        }
        audio.play();
    }

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

        // Reproducir sonido al finalizar la carga, solo si no hay interacción previa
        if (document.hasFocus()) {
            playSound();
        } else {
            // Evento para reproducir el sonido cuando el usuario interactúa con la página
            document.addEventListener('click', playSoundOnce);
            function playSoundOnce() {
                playSound();
                document.removeEventListener('click', playSoundOnce); // Remover el event listener después de reproducir una vez
            }
        }
    }, 4000); // Tiempo de carga simulado en milisegundos (4000 = 4 segundos)
});
