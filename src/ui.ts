import {  EstadoJugador, partida } from "./modelo";
import {  dameCarta, sumarCartas, nuevaPartidaMotor, convertirCarta, mensajes, actualizarEstadoJugador} from "./motor";

export const botonPedir = document.getElementById("dameCarta") as HTMLButtonElement;
export const botonMePlanto = document.getElementById("mePlanto")  as HTMLButtonElement;
export const botonReiniciar = document.getElementById("reiniciar")  as HTMLButtonElement;
export const botonRevelar = document.getElementById("revelaCarta")  as HTMLButtonElement;
export let elementoMsj = document.getElementById("msj") as HTMLDivElement;

export function deshabilitarBoton(...botones: HTMLButtonElement[]) {
    for (const boton of botones) {
        if (boton && boton instanceof HTMLButtonElement) {
            boton.disabled = true;
        }
    }
}

export function habilitarBoton(...botones: HTMLButtonElement[]) {
    for (const boton of botones) {
        if (boton && boton instanceof HTMLButtonElement) {
            boton.disabled = false;
        }
    }
}

export function muestraPuntuacion () {
    const puntuacion = document.getElementById("puntuacion") as HTMLDivElement;
    if (puntuacion) {
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

export function muestraMensaje(estado: EstadoJugador, puntuacion : number, planto : boolean){
    estado = actualizarEstadoJugador(puntuacion, planto);
    if (estado === 'gana' || estado === 'pierde'){
        elementoMsj.innerHTML = mensajes(puntuacion);
    } else if (estado === 'planto'){
        elementoMsj.innerHTML = mensajes(puntuacion);
    } else {
        elementoMsj.innerHTML = "";
    }
}

export function modificarBotones(puntuacion : number, planto : boolean, estado : EstadoJugador) {
    estado = actualizarEstadoJugador(puntuacion, planto);
    if (estado === 'gana' || estado === 'pierde') {
        deshabilitarBoton(botonPedir, botonMePlanto, botonRevelar);
        habilitarBoton(botonReiniciar);
    } else if (estado === 'jugando') {
        deshabilitarBoton(botonReiniciar, botonRevelar);
        habilitarBoton(botonPedir, botonMePlanto);
    } else if (estado === 'planto') {
        deshabilitarBoton(botonPedir, botonMePlanto);
        habilitarBoton(botonReiniciar, botonRevelar);
    }
}

export function nuevaPartidaUI(){
    nuevaPartidaMotor();
    elementoMsj.innerHTML = "";
    muestraPuntuacion();
    muestraCarta(0);
    modificarBotones(partida.puntuacionUsuario, false, partida.estadoJugador);
}

export function procesarCarta(carta : number){
    muestraCarta(carta);
    sumarCartas(carta);
    muestraPuntuacion();
}

export function handleClickCarta(){
    let carta = dameCarta(1, 10);
    procesarCarta(carta);
    muestraMensaje(partida.estadoJugador, partida.puntuacionUsuario, false);
    modificarBotones(partida.puntuacionUsuario, false, partida.estadoJugador);
}

export function handleClickPlanto(){
    partida.estadoJugador = actualizarEstadoJugador(partida.puntuacionUsuario, true);
    muestraMensaje(partida.estadoJugador, partida.puntuacionUsuario, true);
    modificarBotones(partida.puntuacionUsuario, true, partida.estadoJugador);
}

export function handleClickReiniciar(){
    nuevaPartidaUI();    
}

export function handleClickRevelarCarta(){
    let cartaRevelada = dameCarta(1, 10);
    procesarCarta(cartaRevelada);

    deshabilitarBoton(botonRevelar);
    
    if(elementoMsj){
        elementoMsj.innerHTML = `Si no te hubieses plantado habrías conseguido una puntuación de ${partida.puntuacionUsuario}`;
    }

}

