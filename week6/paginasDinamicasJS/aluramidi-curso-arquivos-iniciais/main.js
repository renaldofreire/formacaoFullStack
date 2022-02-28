function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

        if (elemento && elemento.localName === 'audio') {
            elemento.play();
        }
        else {
            console.log('Elemento não encontrado ou o seletor é inválido')
        }

    }

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

//function () significa -> função anônima

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

