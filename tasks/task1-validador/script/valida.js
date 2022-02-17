// Validar login
function validaLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username=="admin@mail.com" && password=="admin") {
        alert("Conectado! Você será redirecionado...");
        window.location.replace("home.html");
        return; // else muitas vezes nao necessario
    } 
    alert("Dados incorretos. Tente novamente.");
}

// Mostrar senha
function verSenha() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
        return;
    } 
    temp.type = "password";
}


//dica: return ao inves do else
