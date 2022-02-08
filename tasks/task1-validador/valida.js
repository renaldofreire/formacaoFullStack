
function validaLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == null || username == "") {
        alert("Por favor, insira seu usuário.");
        return false;
    }
    if (password == null || password == "") {
        alert("Por favor, insira sua senha.")
        return false;
    }

    //alert("Você está conectado.");
    window.location.replace("home.html");
}
