export const PUNT_MAX = 7.5;

export interface Carta {
    valor: number;
    imagen: string;
    alt: string;
}

export type EstadoJugador = 'gana' | 'pierde' | 'jugando' | 'planto';

export const CERO : Carta = { valor: 0, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg", alt: "Carta por detrás" };
export const AS : Carta = { valor: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg", alt: "As de copas" };
export const DOS : Carta = { valor: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg", alt: "Dos de copas" };
export const TRES : Carta = { valor: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg", alt: "Tres de copas" };
export const CUATRO : Carta = { valor: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg", alt: "Cuatro de copas" };
export const CINCO : Carta = { valor: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg", alt: "Cinco de copas" };
export const SEIS : Carta = { valor: 6, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg", alt: "Seis de copas" };
export const SIETE : Carta = { valor: 7, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg", alt: "Siete de copas" };
export const SOTA : Carta = { valor: 10, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg", alt: "Sota de copas" };
export const CABALLO : Carta = { valor: 11, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg", alt: "Caballo de copas" };
export const REY : Carta = { valor: 12, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg", alt: "Rey de copas" };

interface Partida {
    estadoJugador : EstadoJugador;
    puntuacionUsuario : number;
    carta : Carta;
}

export const partida : Partida = {
    estadoJugador : "jugando",
    puntuacionUsuario: 0,
    carta : CERO
}






