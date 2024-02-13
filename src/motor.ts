import { partida, AS, DOS, TRES, CUATRO, CINCO, SEIS, SIETE, SOTA, CABALLO, REY, Carta, CERO, PUNT_MAX, EstadoJugador } from "./modelo";

export function numeroCarta(min : number, max : number){
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
   
    if (num > 7) {
        num += 2;
    } 
    return num;
}

export function dameCarta(min: number, max: number): number {
    const numeroAleatorio = numeroCarta(min, max);
    return numeroAleatorio;
}

export function convertirCarta(carta: number): Carta {
    switch (carta) {
        case 1:
        return AS;
        case 2:
        return DOS;
        case 3:
        return TRES;
        case 4:
        return CUATRO;
        case 5:
        return CINCO;
        case 6:
        return SEIS;
        case 7:
        return SIETE;
        case 10:
        return SOTA;
        case 11:
        return CABALLO;
        case 12:
        return REY;
        default: 
        return CERO;
    }
}

export function mensajes(puntuacionUsuario : number){
    let mensaje = "";
    if (puntuacionUsuario <= 4) {
        mensaje = "Has sido muy conservador";
    } else if (puntuacionUsuario > 4 && puntuacionUsuario < 6) {
        mensaje = "Te ha entrado el canguelo, eh?";
    } else if (puntuacionUsuario >= 6 && puntuacionUsuario <= 7) {
        mensaje = "Casi, casi...";
    } else if (puntuacionUsuario === PUNT_MAX) {
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    } else if (puntuacionUsuario > PUNT_MAX){
        mensaje = "¡Has perdido!";
    }
    return mensaje;
}

export function sumarCartas(carta:number){
    if(carta < 10){
        partida.puntuacionUsuario += carta;
    } else {
        partida.puntuacionUsuario += 0.5;
    }
    return partida.puntuacionUsuario;
}

export function nuevaPartidaMotor(){
    partida.estadoJugador = "jugando";
    partida.puntuacionUsuario = 0;
    partida.carta = CERO;
}

export function actualizarEstadoJugador(puntuacion : number, planto : boolean){
    let estadoJugador : EstadoJugador = 'jugando';
    
    if(puntuacion === PUNT_MAX){
        estadoJugador = 'gana'
    } else if (puntuacion > PUNT_MAX){
        estadoJugador = 'pierde'
    } else if (planto){
        estadoJugador = 'planto'
    } else {
        estadoJugador = 'jugando'
    }

    return estadoJugador;
}
