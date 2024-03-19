function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let grupoSanguineo = document.getElementById('grupoSanguineo').value;
    let genero = document.getElementById('genero').value;

   
    let expresionNombre = /^[a-zA-Z\s]+$/;
    let expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let expresionTelefono = /^\d{10}$/;
    let expresionUsuario = /^[a-zA-Z0-9_-]{3,16}$/;
    let expresionContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    
    if (!expresionNombre.test(nombre)) {
        alert('Por favor, ingrese un nombre válido.');
        return false;
    }
    if (!expresionNombre.test(apellido)) {
        alert('Por favor, ingrese un apellido válido.');
        return false;
    }
    if (!expresionEmail.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    if (!expresionTelefono.test(telefono)) {
        alert('Por favor, ingrese un número de teléfono válido.');
        return false;
    }
    if (!expresionUsuario.test(usuario)) {
        alert('Por favor, ingrese un nombre de usuario válido (entre 3 y 16 caracteres alfanuméricos).');
        return false;
    }
    if (!expresionContraseña.test(contraseña)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.');
        return false;
    }

    
    let mensaje = 'Datos ingresados:\n\n' +
                  'Nombre: ' + nombre + '\n' +
                  'Apellido: ' + apellido + '\n' +
                  'Email: ' + email + '\n' +
                  'Teléfono: ' + telefono + '\n' +
                  'Usuario: ' + usuario + '\n' +
                  'Contraseña: ' + contraseña + '\n' +
                  'Fecha de Nacimiento: ' + fechaNacimiento + '\n' +
                  'Grupo Sanguíneo: ' + grupoSanguineo + '\n' +
                  'Género: ' + genero;

    alert(mensaje);

    return true; 

    
}

function cancelar() {
    window.location.href = "Admin.html";
}
