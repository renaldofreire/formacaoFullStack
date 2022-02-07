// Variáveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15; // diâmetro
let raio = diametro / 2;  

// Velocidade
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Variáveis raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  moverBolinha();
  verColisao();
  mostrarRaquete();
  moverRaquete();
  verificaColisao();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function moverBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verColisao() {
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1; // inverter, multiplica por -1
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1; // inverter, multiplica por -1
  }
}

function mostrarRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function moverRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisao(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}
