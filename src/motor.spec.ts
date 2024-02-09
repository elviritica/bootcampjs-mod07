import { actualizarEstadoJugador } from "./motor";

describe("actualizarEstadoJugador", () => {
    it("Debería devolver 'gana' cuando la puntuación del usuario sea exactamente 7.5", ()=>{
        //Arrange
        let puntuacion : number = 7.5;
        //Act
        const resultado = actualizarEstadoJugador(puntuacion);
        //Assert
        expect(resultado).toBe('gana');
    })
    it("Debería devolver 'pierde' cuando la puntuación del usuario sea mayor que 7.5", ()=>{
        //Arrange
        let puntuacion : number = 10;
        //Act
        const resultado = actualizarEstadoJugador(puntuacion);
        //Assert
        expect(resultado).toBe('pierde');
    })
    it("Debería devolver 'jugando' cuando la puntuación del usuario sea menor que 7.5", ()=>{
        //Arrange
        let puntuacion : number = 5;
        //Act
        const resultado = actualizarEstadoJugador(puntuacion);
        //Assert
        expect(resultado).toBe('jugando');
    })
});