
import { describe, test, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { playAudio, handleTubeClick, handleKeyPress, handleTubeTouchStart } from '../assets/js/sounds';


//comprobamos 
test('En sounds.js - la función playAudio debería existir', () => {

  expect(typeof playAudio).toBe('function');
});

test('En sounds.js - handleTubeClick debería existir', () => {
  expect(typeof handleTubeClick).toBe('function');
});

test('sounds.js - la funcion handleKeyPress deberia existir', () => {
  expect(handleKeyPress).to.be.a('function');
});

test('En el archivo sounds.js existe la funcion handleTubeTouchStart ', () => {
    expect(handleTubeTouchStart).to.be.a('function');
});


/*En el contexto de Chai, la sintaxis .to.be.a se utiliza para afirmar el tipo de un valor en JavaScript. En otras palabras, se espera que el valor al que se aplica esta afirmación sea del tipo especificado. 
En esta afirmación .to.be.a, estamos diciendo que esperamos que playAudio o handleTubeTouchStart  sea una función. Si playAudio no es una función, la prueba fallará.

*/