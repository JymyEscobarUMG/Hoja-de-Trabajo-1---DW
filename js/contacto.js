document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    let form = event.target;

    // Validar el formulario
    if (form.checkValidity()) {
        // Si es válido, mostrar el modal de confirmación
        $('#confirmacionModal').modal('show');

        // Mostrar los datos ingresados en la consola
        const formData = new FormData(form);

        // Convertir los datos del formulario a un objeto para facilidad de uso
        const datos = Object.fromEntries(formData.entries());
        console.log("Datos del formulario:", datos);
        console.log("Nombre:", datos.nombre);
        console.log("Apellido:", datos.apellido);
        console.log("Teléfono:", datos.telefono);
        console.log("Fecha de Nacimiento:", datos.fechaNacimiento);
        console.log("Correo Electrónico:", datos.correo);
        console.log("Mensaje:", datos.mensaje);

        // Reiniciar el formulario después de enviarlo
        //form.reset();
        form.classList.remove('was-validated');
    } else {
        // Si no es válido, marcarlo como inválido para mostrar los mensajes de error
        form.classList.add('was-validated');
    }
});