import {  AS, DOS, TRES, CUATRO, CINCO, SEIS, SIETE, SOTA, CABALLO, REY, partida } from "./modelo";
import {  dameCarta, sumarCartas, nuevaPartidaMotor} from "./motor";

export const botonPedir = document.getElementById("dameCarta") as HTMLButtonElement;
export const botonMePlanto = document.getElementById("mePlanto")  as HTMLButtonElement;
export const botonReiniciar = document.getElementById("reiniciar")  as HTMLButtonElement;
export const botonRevelar = document.getElementById("revelaCarta")  as HTMLButtonElement;
export let elementoMsj = document.getElementById("msj") as HTMLDivElement;


export function muestraCarta(carta : number){
    let imagen = "";
    let alt = "";

    switch(carta){
        case AS:
            carta = 1,
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
            alt = "As de copas"
            break;
        case DOS:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
            carta = 2,
            alt = "Dos de copas"
            break;
        case TRES:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
            carta = 3,
            alt = "Tres de copas"
            break;
        case CUATRO:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
            carta = 4,
            alt = "Cuatro de copas"
            break;
        case CINCO:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
            carta = 5,
            alt = "Cinco de copas"
            break;
        case SEIS:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
            carta = 6,
            alt = "Seis de copas"
            break;
        case SIETE:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
            carta = 7,
            alt = "Siete de copas"
            break;
        case SOTA:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
            carta = 10,
            alt = "Sota de copas"
            break;
        case CABALLO:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
            carta = 11,
            alt = "Caballo de copas"
            break;
        case REY:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
            carta = 12,
            alt = "Rey de copas"
            break;
    }

    let imagenCarta = document.getElementById("carta");
    if(imagenCarta && imagenCarta instanceof HTMLImageElement){
        imagenCarta.src = imagen;
        imagenCarta.alt = alt;
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