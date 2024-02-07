import { partida, AS, DOS, TRES, CUATRO, CINCO, SEIS, SIETE, SOTA, CABALLO, REY, Carta } from "./modelo";

export function generarNumRandom (min : number, max : number) : number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function dameCarta(){
    let num = generarNumRandom(1,10);
    let carta = 0;

    if (num > 7) {
        carta = num + 2;
    } else {
        carta = num;
    }

    return carta;
}

export function convertirCarta(carta: number): Carta | undefined {
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
    }
    return undefined;
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
    partida.numIntentos = 0;
    partida.puntuacionUsuario = 0;
}





