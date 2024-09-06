$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Evita el envío normal del formulario

        // Aquí podrías agregar el código para enviar el formulario usando AJAX
        // Ejemplo:
        $.ajax({
            url: 'tu-script-de-envio.php', // Cambia esto a la URL de tu script de procesamiento
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                // Muestra el mensaje de éxito
                $('#successMessage').fadeIn();
                // Opcional: Limpia el formulario después del envío
                $('#contactForm')[0].reset();
            },
            error: function() {
                // Maneja errores si es necesario
                alert('Hubo un problema al enviar el formulario. Inténtalo de nuevo.');
            }
        });
    });
});
