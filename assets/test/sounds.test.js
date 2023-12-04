// Importamos las funciones que queremos probar desde el archivo 'sounds.js'
import { expect, test } from 'vitest';
import { playAudio, handleTubeClick, handleTubeTouchStart } from '../js/sounds';

const player = require('play-sound')();


// Test para la función 'playAudio'
test('playAudio debería reproducir el archivo de audio correcto', () => {
  // Mockeamos objetos o elementos necesarios para la prueba
  const mockElementoAudio = {
    play: () => {}, // Mockeamos el método play
  };

  playAudio('1');

  // Afirmaciones
  expect(playAudio('1')).toHaveBeenCalledWith('../assets/audio/01_A.wav');
  // Es posible que necesites ajustar esta afirmación según tu implementación real
  expect(mockElementoAudio.play).toHaveBeenCalled();
});
