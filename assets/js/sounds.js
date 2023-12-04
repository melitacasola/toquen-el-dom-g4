//sounds.js
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


  const tubes = document.querySelectorAll('.tube');

  function playAudio(audioFiles, noteKey) {
    const audioElement = new Audio(audioFiles[noteKey]);
    audioElement.play();
    console.log(audioElement);
  }

  tubes.forEach((tube) => {
    tube.addEventListener('click', function () {
      const noteKey = tube.dataset.key;
      const audioElement = document.getElementById(noteKey);
      
      
      if (audioElement) {
        audioElement.play();
        console.log(noteKey);
        console.log(audioElement + "raro");
      } else {
        console.error(`Elemento de audio no encontrado para la nota: ${noteKey}`);
      }
    });
  });


  document.addEventListener('keydown', function(event) {
    let key;
    if (event.key.length === 1) {
      key = event.key.toUpperCase();
      console.log(key);
    } else {
      key = event.key;
    }
  
    if (audioFiles[key]) {
      playAudio(audioFiles, key);
    } else {
      console.error(`Elemento de audio no encontrado para la tecla: ${key}`);
    }
  });


  /* ----EVENTO MENU DESPLEGABLE------*/  
  const menuIcon = document.getElementById("menuBurger");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener('click', function () {
      menu.classList.toggle("show");
  });

});
