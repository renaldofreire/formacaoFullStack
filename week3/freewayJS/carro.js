let xCarros = [600, 600, 600];
let yCarros = [40, 100, 150];
let velocidadeCarros = [2, 2.8, 3.2];

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
        print("valor de i é " + i)
    }
}

function movimentaCarro(){
    xCarros[0] -= velocidadeCarros[0]; //xCarro = xCarro - 2;
    xCarros[1] -= velocidadeCarros[1]; //xCarro = xCarro - 2;
    xCarros[2] -= velocidadeCarros[2]; //xCarro = xCarro - 2;
    //print(xCarro);
}

function voltaInicioCarro(){
    if (xCarros[0] < -50) {
        xCarros[0] = 600;
    }
    if (xCarros[1] < -50) {
        xCarros[1] = 600;
    }
    if (xCarros[2] < -50) {
        xCarros[2] = 600;
    }
}
