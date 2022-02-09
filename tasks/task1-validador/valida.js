// Validar login
function validaLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username=="admin" && password=="admin") {
        alert("Conectado! Você será redirecionado...");
        window.location.replace("home.html");
    } else {
        alert("Dados incorretos. Tente novamente.");
    }
}

// Mostrar senha
function verSenha() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
    } else {
        temp.type = "password";
    }
}
