import { it, describe, expect, assert } from "vitest";
import { modificarBotones, muestraMensaje } from "./ui";
import { EstadoJugador, PUNT_MAX } from "./modelo";
import { mensajes } from "./motor";


describe("modificarBotones", () => {
  it("Si el estado es 'gana' debería deshabilitar los botones Pedir, me Planto y Revelar y habilitar el boton Reiniciar.", () => {
    // Arrange
    const puntuacion: number = PUNT_MAX;
    const botonPedir: HTMLButtonElement = document.createElement("button");
    const botonMePlanto = document.createElement("button");
    const botonRevelar = document.createElement("button");
    const botonReiniciar = document.createElement("button");
    const planto: boolean = false;
    const estado: EstadoJugador = "gana";

    // Act
    modificarBotones(
      puntuacion,
      botonPedir,
      botonMePlanto,
      botonRevelar,
      botonReiniciar,
      planto,
      estado
    );

    // Assert
    assert.isTrue(botonPedir.disabled);
    assert.isTrue(botonMePlanto.disabled);
    assert.isTrue(botonRevelar.disabled);
    assert.isFalse(botonReiniciar.disabled);
  });
  it("Si el estado es 'pierde' debería deshabilitar los botones Pedir, me Planto y Revelar y habilitar el boton Reiniciar.", () => {
    // Arrange
    const puntuacion: number = 8;
    const botonPedir: HTMLButtonElement = document.createElement("button");
    const botonMePlanto = document.createElement("button");
    const botonRevelar = document.createElement("button");
    const botonReiniciar = document.createElement("button");
    const planto: boolean = false;
    const estado: EstadoJugador = "pierde";

    // Act
    modificarBotones(
      puntuacion,
      botonPedir,
      botonMePlanto,
      botonRevelar,
      botonReiniciar,
      planto,
      estado
    );

    // Assert
    assert.isTrue(botonPedir.disabled);
    assert.isTrue(botonMePlanto.disabled);
    assert.isTrue(botonRevelar.disabled);
    assert.isFalse(botonReiniciar.disabled);
  });
  it("Si el estado es 'jugando' debería deshabilitar los botones Reiniciar y Revelar y habilitar los botones Pedir y Me Planto.", () => {
    // Arrange
    const puntuacion: number = 6;
    const botonPedir: HTMLButtonElement = document.createElement("button");
    const botonMePlanto = document.createElement("button");
    const botonRevelar = document.createElement("button");
    const botonReiniciar = document.createElement("button");
    const planto: boolean = false;
    const estado: EstadoJugador = "jugando";

    // Act
    modificarBotones(
      puntuacion,
      botonPedir,
      botonMePlanto,
      botonRevelar,
      botonReiniciar,
      planto,
      estado
    );

    // Assert
    assert.isFalse(botonPedir.disabled);
    assert.isFalse(botonMePlanto.disabled);
    assert.isTrue(botonRevelar.disabled);
    assert.isTrue(botonReiniciar.disabled);
  });
  it("Si el estado es 'planto' debería habilitar los botones Reiniciar y Revelar y deshabilitar los botones Pedir y Me Planto.", () => {
    // Arrange
    const puntuacion: number = 6;
    const botonPedir: HTMLButtonElement = document.createElement("button");
    const botonMePlanto = document.createElement("button");
    const botonRevelar = document.createElement("button");
    const botonReiniciar = document.createElement("button");
    const planto: boolean = true;
    const estado: EstadoJugador = "planto";

    // Act
    modificarBotones(
      puntuacion,
      botonPedir,
      botonMePlanto,
      botonRevelar,
      botonReiniciar,
      planto,
      estado
    );

    // Assert
    assert.isTrue(botonPedir.disabled);
    assert.isTrue(botonMePlanto.disabled);
    assert.isFalse(botonRevelar.disabled);
    assert.isFalse(botonReiniciar.disabled);
  });
});

describe("muestraMensaje", () => {
  it("Muestra el mensaje adecuado si el estado es 'gana'", () => {
    //Arrange
    const estado: EstadoJugador = "gana";
    const puntuacion: number = PUNT_MAX;
    const planto: boolean = false;

    let resultado = document.createElement("div") as HTMLDivElement;
    document.body.appendChild(resultado);

    const mensajeEsperado: string = '¡Lo has clavado! ¡Enhorabuena!';
    
    //Act
    muestraMensaje(estado, puntuacion, planto, resultado);
   
    //Assert
    expect(resultado.innerHTML).toBe(mensajeEsperado);

  });
  it("Muestra el mensaje adecuado si el estado es 'pierde'", () => {
    //Arrange
    const estado: EstadoJugador = "pierde";
    const puntuacion: number = 8;
    const planto: boolean = false;

    let resultado = document.createElement("div") as HTMLDivElement;
    document.body.appendChild(resultado);

    const mensajeEsperado: string = '¡Has perdido!';
    
    //Act
    muestraMensaje(estado, puntuacion, planto, resultado);
   
    //Assert
    expect(resultado.innerHTML).toBe(mensajeEsperado);

  });
  it("Muestra el mensaje adecuado según la puntuación si el estado es 'planto'", () => {
    //Arrange
    const estado: EstadoJugador = "planto";
    const puntuacion: number = 5;
    const planto: boolean = true;
    
    let resultado = document.createElement("div") as HTMLDivElement;
    document.body.appendChild(resultado);

    const mensajeEsperado: string = mensajes(puntuacion);
    
    //Act
    muestraMensaje(estado, puntuacion, planto, resultado);
   
    //Assert
    expect(resultado.innerHTML).toBe(mensajeEsperado);

  });
  it("No muestra ningún mensaje mientras el estado sea 'jugando'", () => {
    //Arrange
    const estado: EstadoJugador = "jugando";
    const puntuacion: number = 5;
    const planto: boolean = false;

    let resultado = document.createElement("div") as HTMLDivElement;
    document.body.appendChild(resultado);

    const mensajeEsperado: string = "";
    
    //Act
    muestraMensaje(estado, puntuacion, planto, resultado);
   
    //Assert
    expect(resultado.innerHTML).toBe(mensajeEsperado);

  });
});
