import { botonMePlanto, botonPedir, botonReiniciar, botonRevelar, handleClickCarta, handleClickPlanto, handleClickReiniciar, handleClickRevelarCarta, nuevaPartidaUI } from "./ui";

document.addEventListener("DOMContentLoaded", ()=> {
    nuevaPartidaUI();
});

if(botonPedir){
    botonPedir.addEventListener("click", handleClickCarta);
}

if(botonMePlanto){
    botonMePlanto.addEventListener("click", handleClickPlanto);
}

if(botonReiniciar){
    botonReiniciar.addEventListener("click", handleClickReiniciar);
}

if(botonRevelar){
    botonRevelar.addEventListener("click", handleClickRevelarCarta);
}