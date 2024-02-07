import {  partida } from "./modelo";
import {  dameCarta, sumarCartas, nuevaPartidaMotor, convertirCarta, mensajes} from "./motor";

export const botonPedir = document.getElementById("dameCarta") as HTMLButtonElement;
export const botonMePlanto = document.getElementById("mePlanto")  as HTMLButtonElement;
export const botonReiniciar = document.getElementById("reiniciar")  as HTMLButtonElement;
export const botonRevelar = document.getElementById("revelaCarta")  as HTMLButtonElement;
export let elementoMsj = document.getElementById("msj") as HTMLDivElement;

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
export function muestraPuntuacion () {
    const puntuacion = document.getElementById("puntuacion");
    if (puntuacion && puntuacion instanceof HTMLDivElement) {
        puntuacion.innerHTML = partida.puntuacionUsuario.toString();
    } 
}

export function muestraCarta(numCarta : number){
    const carta = convertirCarta(numCarta);
    if (carta){
        let imagenCarta = document.getElementById("carta") as HTMLImageElement;
        if (imagenCarta){
            imagenCarta.src = carta.imagen;
            imagenCarta.alt = carta.alt;
        }
    }
}

export function muestraMensaje(puntuacion : number){
    elementoMsj.innerHTML = mensajes(puntuacion);
}

export function ganarOPerder(puntuacion : number){
    if(puntuacion > 7.5 || puntuacion === 7.5){
        muestraMensaje(puntuacion);
        deshabilitarBoton(botonPedir);
        deshabilitarBoton(botonMePlanto);
        habilitarBoton(botonReiniciar);
    }
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
    ganarOPerder(partida.puntuacionUsuario);
}

export function handleClickPlanto(){
    muestraMensaje(partida.puntuacionUsuario);
    deshabilitarBoton(botonPedir);
    deshabilitarBoton(botonMePlanto);
    habilitarBoton(botonReiniciar);
    habilitarBoton(botonRevelar);
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

