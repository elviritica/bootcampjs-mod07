import { actualizarEstadoJugador } from "./motor";
import { it, describe, expect } from 'vitest';

describe("actualizarEstadoJugador", () => {
    it("Debería devolver 'gana' cuando la puntuación del usuario sea exactamente 7.5", ()=>{
        //Arrange
        let puntuacion : number = 7.5;
        //Act
        const resultado = actualizarEstadoJugador(puntuacion, false);
        //Assert
        expect(resultado).toBe('gana');
    })
    it("Debería devolver 'pierde' cuando la puntuación del usuario sea mayor que 7.5", ()=>{
        //Arrange
        let puntuacion : number = 10;
        //Act
        const resultado = actualizarEstadoJugador(puntuacion, false);
        //Assert
        expect(resultado).toBe('pierde');
    })
    it("Debería devolver 'jugando' cuando la puntuación del usuario sea menor que 7.5 y 'planto' sea 'false' ", ()=>{
        //Arrange
        let puntuacion : number = 5;
        //Act
        const resultado = actualizarEstadoJugador(puntuacion, false);
        //Assert
        expect(resultado).toBe('jugando');
    })
    it("Debería devolver 'planto' si la puntuación es menor de 7.5 y cuando 'planto' sea 'true'", ()=>{
        //Arrange
        let puntuacion : number = 5;
        //Act
        const resultado = actualizarEstadoJugador(puntuacion, true);
        //Assert
        expect(resultado).toBe('planto');
    })
});