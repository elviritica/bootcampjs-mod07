import { ganarOPerder } from "./ui";

describe("ganarOPerder", () => {
    it("Debería mostrar el mensaje correcto y deshabilitar los botones de pedir carta, plantarse y revelar carta cuando el jugador gana", () => {
        //Arrange
        const mensajeEsperado = "¡Lo has clavado! ¡Enhorabuena!";
        const botonPedir = { disabled: false };
        const botonMePlanto = { disabled: false };
        const botonReiniciar = { disabled: true };
        const botonRevelar = { disabled: false };
        const elementoMsj = { innerHTML: "" };
        //Act
        ganarOPerder('gana');
        //Assert
        expect(elementoMsj.innerHTML).toBe(mensajeEsperado);
        expect(botonPedir.disabled).toBe(true);
        expect(botonMePlanto.disabled).toBe(true);
        expect(botonRevelar.disabled).toBe(true);
        expect(botonReiniciar.disabled).toBe(false);
    })
    it("Debería mostrar el mensaje correcto y deshabilitar los botones de pedir carta, plantarse y revelar carta cuando el jugador pierde", () => {
        //Arrange
        const mensajeEsperado = "¡Has perdido!";
        const botonPedir = { disabled: false };
        const botonMePlanto = { disabled: false };
        const botonReiniciar = { disabled: true };
        const botonRevelar = { disabled: false };
        const elementoMsj = { innerHTML: "" };

        //Act
        ganarOPerder('pierde');
        //Assert
        expect(elementoMsj.innerHTML).toBe(mensajeEsperado);
        expect(botonPedir.disabled).toBe(true);
        expect(botonMePlanto.disabled).toBe(true);
        expect(botonRevelar.disabled).toBe(true);
        expect(botonReiniciar.disabled).toBe(false);
    })
    it("Debería habilitar el botón de reiniciar y deshabilitar el botón de revelar carta cuando el jugador sigue jugando", () => {
        //Arrange
        const botonPedir = { disabled: true };
        const botonMePlanto = { disabled: true };
        const botonReiniciar = { disabled: false };
        const botonRevelar = { disabled: true };

        //Act
        ganarOPerder('jugando');
        //Assert
        expect(botonPedir.disabled).toBe(false);
        expect(botonMePlanto.disabled).toBe(false);
        expect(botonRevelar.disabled).toBe(true);
        expect(botonReiniciar.disabled).toBe(false);
    })
})