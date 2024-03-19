function login() {
    event.preventDefault();
    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    console.log("Usuario:", username);
    console.log("Contraseña:", password);
}

function signup() {
    window.location.href = "Signup.html";
}

function cancelar() {
    window.location.href = "Noticias.html";
}
