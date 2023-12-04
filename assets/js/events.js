
import * as events from './sounds.js';

document.addEventListener('DOMContentLoaded', function() {
  const audioFiles = {
    '1': '../assets/audio/01_A.wav',
    '2': '../assets/audio/02_W.wav',
    '3': '../assets/audio/03_S.wav',  
    '4': '../assets/audio/04_E.wav',
    '5': '../assets/audio/05_D.wav',
    '6': '../assets/audio/06_R.wav',
    '7': '../assets/audio/07_F.wav',
    '8': '../assets/audio/08_T.wav',
    '9': '../assets/audio/09_G.wav',
    '0': '../assets/audio/10_Y.wav',
    'Q': '../assets/audio/11_H.wav',
    'W': '../assets/audio/12_U.wav',
    'E': '../assets/audio/13_J.wav',
    'R': '../assets/audio/14_I.wav',
    'T': '../assets/audio/15_K.wav',
  };

  events.handleTubeTouchStart();

  document.addEventListener('keydown', (event) => events.handleKeyPress(event, audioFiles));

});
