var carrossel = document.querySelector(".lista_de_slides");
var slides = document.querySelectorAll(".carrossel .slide");
var opcoes = document.querySelectorAll(".carrossel .opcao");
var contador=0;

opcoes[0].style.backgroundColor = "blue";

function passa_1_slide() {
    for(let i=0; i<slides.length; i++) {
    opcoes[i].style.backgroundColor = "white";
    }
    contador++;
    if(contador>slides.length-1) {
        contador=0;
    }
    opcoes[contador].style.backgroundColor = "blue";
    carrossel.style.marginLeft = "-" + contador*100 + "%";
    console.log(contador);
}

var id_loop = setInterval(passa_1_slide, 3000);

function altera_visao(num) {
    contador = num;
    for(let i=0; i<slides.length; i++) {
        opcoes[i].style.backgroundColor = "white";
        }
    opcoes[num].style.backgroundColor = "blue";
    carrossel.style.marginLeft = "-" + contador*100 + "%";
    clearInterval(id_loop);
    id_loop = setInterval(passa_1_slide, 3000);
}