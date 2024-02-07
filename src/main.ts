import { botonMePlanto, botonPedir, botonReiniciar, botonRevelar, handleClickCarta, handleClickPlanto, handleClickReiniciar, handleClickRevelarCarta, nuevaPartidaUI } from "./ui";

document.addEventListener("DOMContentLoaded", ()=> {
    nuevaPartidaUI();
});

if(botonPedir && botonPedir instanceof HTMLButtonElement){
    botonPedir.addEventListener("click", handleClickCarta);
}

if(botonMePlanto && botonMePlanto instanceof HTMLButtonElement){
    botonMePlanto.addEventListener("click", handleClickPlanto);
}

if(botonReiniciar && botonReiniciar instanceof HTMLButtonElement){
    botonReiniciar.addEventListener("click", handleClickReiniciar);
}

if(botonRevelar && botonRevelar instanceof HTMLButtonElement){
    botonRevelar.addEventListener("click", handleClickRevelarCarta);
}