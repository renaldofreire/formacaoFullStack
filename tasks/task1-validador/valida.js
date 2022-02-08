
function validaLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        alert("Conectado. Você será redirecionado...");
        window.location.replace("home.html");
    } else {
        alert("Por favor, insira seu usuário e senha.");
    }
}
