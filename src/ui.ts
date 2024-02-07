import {  partida } from "./modelo";
import {  dameCarta, sumarCartas, nuevaPartidaMotor, convertirCarta} from "./motor";

export const botonPedir = document.getElementById("dameCarta") as HTMLButtonElement;
export const botonMePlanto = document.getElementById("mePlanto")  as HTMLButtonElement;
export const botonReiniciar = document.getElementById("reiniciar")  as HTMLButtonElement;
export const botonRevelar = document.getElementById("revelaCarta")  as HTMLButtonElement;
export let elementoMsj = document.getElementById("msj") as HTMLDivElement;


export function muestraCarta(numCarta : number){
    const carta = convertirCarta(numCarta);
    if (carta){
        let imagenCarta = document.getElementById("carta") as HTMLImageElement;
        if (imagenCarta) {
            imagenCarta.src = carta.imagen;
            imagenCarta.alt = carta.alt;
          }
    }
}

export function gameOver(puntuacionUsuario : number){
    if(puntuacionUsuario > 7.5){
        if(elementoMsj && elementoMsj instanceof HTMLDivElement){
            elementoMsj.innerHTML = "Has perdido";
        }
        deshabilitarBoton(botonPedir);
        deshabilitarBoton(botonMePlanto);
        habilitarBoton(botonReiniciar);
    }
}

export function hasGanado(puntuacionUsuario : number){
    if (puntuacionUsuario === 7.5) {
        if(elementoMsj && elementoMsj instanceof HTMLDivElement){
            elementoMsj.innerHTML = "Has ganado";
        }
        deshabilitarBoton(botonPedir);
        deshabilitarBoton(botonMePlanto);
        habilitarBoton(botonReiniciar);
    }
}

export function mePlanto(puntuacionUsuario : number){
    let mensaje = "";
    if(puntuacionUsuario <= 4){
        mensaje = "Has sido muy conservador";
    } else if (puntuacionUsuario > 4 && puntuacionUsuario < 6) {
        mensaje = "Te ha entrado el canguelo, eh?";
    } else if (puntuacionUsuario >= 6 && puntuacionUsuario <= 7) {
        mensaje = "Casi, casi...";
    } else if (puntuacionUsuario === 7.5){
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }

    if(elementoMsj && elementoMsj instanceof HTMLDivElement){
        elementoMsj.innerHTML = mensaje;
    }

    deshabilitarBoton(botonMePlanto);
    habilitarBoton(botonReiniciar);
    habilitarBoton(botonRevelar);
}

export function nuevaPartidaUI(){
    nuevaPartidaMotor();
    elementoMsj.innerHTML = "";
    muestraPuntuacion();
    deshabilitarBoton(botonReiniciar);
    deshabilitarBoton(botonRevelar);
    habilitarBoton(botonPedir);
    habilitarBoton(botonMePlanto);
}

export function handleClickCarta(){
    let carta = dameCarta();
    muestraCarta(carta);
    sumarCartas(carta);
    muestraPuntuacion();
    hasGanado(partida.puntuacionUsuario);
    gameOver(partida.puntuacionUsuario);
}

export function handleClickPlanto(){
    mePlanto(partida.puntuacionUsuario);
    deshabilitarBoton(botonPedir);
}

export function handleClickReiniciar(){
    nuevaPartidaUI();    
}

export function handleClickRevelarCarta(){
    let cartaRevelada = dameCarta();
    muestraCarta(cartaRevelada);
    sumarCartas(cartaRevelada);
    muestraPuntuacion();

    deshabilitarBoton(botonRevelar);
    
    if(elementoMsj && elementoMsj instanceof HTMLDivElement){
        elementoMsj.innerHTML = `Si no te hubieses plantado habrías conseguido una puntuación de ${partida.puntuacionUsuario}`;
    }

}

export function muestraPuntuacion () {
    const puntuacion = document.getElementById("puntuacion");
    if (puntuacion && puntuacion instanceof HTMLDivElement) {
        puntuacion.innerHTML = partida.puntuacionUsuario.toString();
    } 
}

export function deshabilitarBoton(boton : HTMLButtonElement){
    if (boton && boton instanceof HTMLButtonElement) {
        boton.disabled = true;
    }
}

export function habilitarBoton(boton : HTMLButtonElement){
    if (boton && boton instanceof HTMLButtonElement) {
        boton.disabled = false;
    }
}