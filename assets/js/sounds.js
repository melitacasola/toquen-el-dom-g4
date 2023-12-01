//sounds.js

document.addEventListener('DOMContentLoaded', function() {
  const audioFiles = {
    'SOL': '../assets/audio/01_A.wav',
    'LA': '../assets/audio/02_W.wav',
    'SI': '../assets/audio/03_S.wav',  
    'DO': '../assets/audio/04_E.wav',
    'RE': '../assets/audio/05_D.wav',
    'MI': '../assets/audio/06_R.wav',
    'FA': '../assets/audio/07_F.wav',
    'SOL2': '../assets/audio/08_T.wav',
    'LA2': '../assets/audio/09_G.wav',
    'SI2': '../assets/audio/10_Y.wav',
    'DO2': '../assets/audio/11_H.wav',
    'RE2': '../assets/audio/12_U.wav',
    'MI2': '../assets/audio/13_J.wav',
    'FA2': '../assets/audio/14_I.wav',
    'SOL3': '../assets/audio/15_K.wav',
  };



  // Precargar archivos de audio
  Object.keys(audioFiles).forEach((noteKey) => {
    const audioElement = new Audio(audioFiles[noteKey]);
    audioElement.load();
  });

  const tubes = document.querySelectorAll('.tube');

  function playAudio(audioFiles, noteKey) {
    const audioElement = new Audio(audioFiles[noteKey]);
    audioElement.play();
  }

  tubes.forEach((tube) => {
    tube.addEventListener('click', function () {
      const noteKey = tube.dataset.key;
      const audioElement = document.getElementById(noteKey);
      
      if (audioElement) {
        audioElement.play();
      } else {
        console.error(`Elemento de audio no encontrado para la nota: ${noteKey}`);
      }
    });
  });

  //tubes.addEventListener('touchstart', function () {
   // playAudio(note);
  //});

  document.addEventListener('keydown', function(event) {
    let key;
    if (event.key.length === 1) {
      key = event.key.toUpperCase();
    } else {
      key = event.key;
    }

    if (audioFiles[key]) {
      playAudio(audioFiles, key);
    }
  });

  
// Función para manejar eventos de teclado
/*function handleKeyPress(event) {
const key = event.key.toLowerCase();
  console.log(key);
  if (audioFiles[key]) {
  playAudio(key);
}
}

document.addEventListener('keydown', handleKeyPress);*/
});
