// Animación en los iconos de redes sociales
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease-in-out';
    });

    icon.addEventListener('mouseleave', function () {
        icon.style.transform = 'scale(1)';
    });
});

// Activar validación de formularios de Bootstrap
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()

// Mostrar la animación de carga mientras se procesa el formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el envío real para la demostración

    // Mostrar el spinner de carga
    document.getElementById("loadingSpinner").style.display = "block";

    // Simular un retraso (como si estuviera procesando)
    setTimeout(function() {
        document.getElementById("loadingSpinner").style.display = "none";
        // Mostrar el mensaje de éxito
        const successMessage = document.createElement("div");
        successMessage.classList.add("alert", "alert-success");
        successMessage.textContent = "¡Gracias por contactarnos! Te responderemos lo más pronto posible.";

        document.querySelector(".contact-section").prepend(successMessage);

        // Ocultar el formulario después de enviar
        document.getElementById("contactForm").style.display = "none";
    }, 2000); // Simula un retraso de 2 segundos
});
