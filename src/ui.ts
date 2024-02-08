import {  partida } from "./modelo";
import {  dameCarta, sumarCartas, nuevaPartidaMotor, convertirCarta, mensajes, actualizarEstadoJugador} from "./motor";

export const botonPedir = document.getElementById("dameCarta") as HTMLButtonElement;
export const botonMePlanto = document.getElementById("mePlanto")  as HTMLButtonElement;
export const botonReiniciar = document.getElementById("reiniciar")  as HTMLButtonElement;
export const botonRevelar = document.getElementById("revelaCarta")  as HTMLButtonElement;
export let elementoMsj = document.getElementById("msj") as HTMLDivElement;

function deshabilitarBoton(...botones: HTMLButtonElement[]) {
    for (const boton of botones) {
        if (boton) {
            boton.disabled = true;
        }
    }
}

function habilitarBoton(...botones: HTMLButtonElement[]) {
    for (const boton of botones) {
        if (boton) {
            boton.disabled = false;
        }
    }
}

function muestraPuntuacion () {
    const puntuacion = document.getElementById("puntuacion") as HTMLDivElement;
    if (puntuacion) {
        puntuacion.innerHTML = partida.puntuacionUsuario.toString();
    } 
}

function muestraCarta(numCarta : number){
    const carta = convertirCarta(numCarta);
    if (carta){
        let imagenCarta = document.getElementById("carta") as HTMLImageElement;
        if (imagenCarta){
            imagenCarta.src = carta.imagen;
            imagenCarta.alt = carta.alt;
        }
    }
}

function muestraMensaje(puntuacion : number){
    elementoMsj.innerHTML = mensajes(puntuacion);
}

function ganarOPerder(){
    let estado = actualizarEstadoJugador();
    if (estado === 'gana' || estado === 'pierde'){
        muestraMensaje(partida.puntuacionUsuario);
        deshabilitarBoton(botonPedir, botonMePlanto, botonRevelar);
        habilitarBoton(botonReiniciar);
    } else {
        deshabilitarBoton(botonReiniciar, botonRevelar);
        habilitarBoton(botonPedir, botonMePlanto);
    }
}

export function nuevaPartidaUI(){
    nuevaPartidaMotor();
    elementoMsj.innerHTML = "";
    muestraPuntuacion();
    deshabilitarBoton(botonReiniciar, botonRevelar);
    habilitarBoton(botonPedir, botonMePlanto);
}

function procesarCarta(carta : number){
    muestraCarta(carta);
    sumarCartas(carta);
    muestraPuntuacion();
}

export function handleClickCarta(){
    let carta = dameCarta();
    procesarCarta(carta);
    ganarOPerder();
}

export function handleClickPlanto(){
    muestraMensaje(partida.puntuacionUsuario);
    deshabilitarBoton(botonPedir, botonMePlanto);
    habilitarBoton(botonReiniciar, botonRevelar);
}

export function handleClickReiniciar(){
    nuevaPartidaUI();    
}

export function handleClickRevelarCarta(){
    let cartaRevelada = dameCarta();
    procesarCarta(cartaRevelada);

    deshabilitarBoton(botonRevelar);
    
    if(elementoMsj){
        elementoMsj.innerHTML = `Si no te hubieses plantado habrías conseguido una puntuación de ${partida.puntuacionUsuario}`;
    }

}

