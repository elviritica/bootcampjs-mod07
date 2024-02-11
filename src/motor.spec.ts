import { actualizarEstadoJugador, convertirCarta, numeroCarta,  } from "./motor";
import { AS, DOS, TRES, CUATRO, CINCO, SEIS, SIETE, SOTA, CABALLO, REY } from "./modelo";
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

describe("numeroCarta", () => {
    it("Debería devolver un número entre 1 y 10 y no sumarle nada si es menor de 7", () => {
        // Arrange
        const min = 1;
        const max = 10;
         
        // Act
        const carta = numeroCarta(min, max);
        
        // Assert  
        expect(carta).toBeGreaterThanOrEqual(min);
        expect(carta).toBeLessThanOrEqual(max + 2);
    });
  });

describe("convertirCarta", () => {
    it("Debería devolver AS cuando recibe 1", ()=>{
        let carta = convertirCarta(1);

        expect(carta).toBe(AS);
    })
    it("Debería devolver DOS cuando recibe 2", ()=>{
        let carta = convertirCarta(2);
        
        expect(carta).toBe(DOS);
    })
    it("Debería devolver TRES cuando recibe 3", ()=>{
        let carta = convertirCarta(3);
        
        expect(carta).toBe(TRES);
    })
    it("Debería devolver CUATRO cuando recibe 4", ()=>{
        let carta = convertirCarta(4);
        
        expect(carta).toBe(CUATRO);
    })
    it("Debería devolver CINCO cuando recibe 5", ()=>{
        let carta = convertirCarta(5);
        
        expect(carta).toBe(CINCO);
    })
    it("Debería devolver SEIS cuando recibe 6", ()=>{
        let carta = convertirCarta(6);
        
        expect(carta).toBe(SEIS);
    })
    it("Debería devolver SIETE cuando recibe 7", ()=>{
        let carta = convertirCarta(7);
        
        expect(carta).toBe(SIETE);
    })
    it("Debería devolver DIEZ cuando recibe 10", ()=>{
        let carta = convertirCarta(10);
        
        expect(carta).toBe(SOTA);
    })
    it("Debería devolver ONCE cuando recibe 11", ()=>{
        let carta = convertirCarta(11);
        
        expect(carta).toBe(CABALLO);
    })
    it("Debería devolver CABALLO cuando recibe 12", ()=>{
        let carta = convertirCarta(12);
        
        expect(carta).toBe(REY);
    })
})