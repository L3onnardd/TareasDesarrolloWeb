// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
    
    // ==========================================================
    // FUNCIONALIDAD PARA LA PÁGINA DE NOTICIAS (Leer más/menos)
    // ==========================================================
    const collapseTriggers = document.querySelectorAll('[data-bs-toggle="collapse"]');
    
    if (collapseTriggers.length > 0) {
        collapseTriggers.forEach(function (trigger) {
            trigger.addEventListener('click', function () {
                setTimeout(() => {
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    this.textContent = isExpanded ? 'Leer menos' : 'Leer más';
                }, 10);
            });
        });
    }

    // ==========================================================
    // FUNCIONALIDAD PARA EL FORMULARIO DE CONTACTO (Validación)
    // ==========================================================
    const contactForm = document.querySelector('#contact-form');

    // Ejecutar solo si el formulario existe en la página actual
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Evita que el formulario se envíe de la manera tradicional
            event.preventDefault();
            event.stopPropagation();

            // Comprueba si todos los campos son válidos
            if (!contactForm.checkValidity()) {
                // Si no es válido, no hace nada más que mostrar los errores
            } else {
                // Si es válido, muestra un mensaje de éxito
                alert('¡Mensaje enviado con éxito! Gracias por contactarnos.');
                
                // Limpia el formulario
                contactForm.reset();

                // Quita las clases de validación para que el formulario vuelva a su estado inicial
                contactForm.classList.remove('was-validated');
            }
            
            // Agrega las clases de Bootstrap para mostrar los estilos de validación (mensajes de error/éxito)
            contactForm.classList.add('was-validated');
        }, false);
    }
});