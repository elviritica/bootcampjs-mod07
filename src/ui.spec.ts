import { ganarOPerder } from "./ui";
import { it, describe, expect } from 'vitest';

describe("ganarOPerder", () => {
    it("Debería mostrar el mensaje correcto y deshabilitar los botones de pedir carta, plantarse y revelar carta cuando el jugador gana", () => {
        // Arrange
        const mensajeEsperado = "¡Lo has clavado! ¡Enhorabuena!";
        const elementoMsj = { innerHTML: "" };

        const botonPedir = { disabled: false };
        const botonMePlanto = { disabled: false };
        const botonReiniciar = { disabled: true };
        const botonRevelar = { disabled: false };
        // Act
        ganarOPerder();
        // Assert
        expect(elementoMsj.innerHTML).toBe(mensajeEsperado);

        expect(botonPedir.disabled).toBe(true);
        expect(botonMePlanto.disabled).toBe(true);
        expect(botonRevelar.disabled).toBe(true);
        expect(botonReiniciar.disabled).toBe(false);
    });
});

