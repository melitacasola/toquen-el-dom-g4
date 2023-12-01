//sounds.js
const audioFiles = {
    'SOL': 'assets/audio/01_A.wav',
    'LA': 'assets/audio/02_W.wav',
    'SI': 'assets/audio/03_S.wav',  
    'DO': 'assets/audio/04_E.wav',
    'RE': 'assets/audio/05_D.wav',
    'MI': 'assets/audio/06_R.wav',
    'FA': 'assets/audio/07_F.wav',
    'SOL': 'assets/audio/08_T.wav',
    'LA': 'assets/audio/09_G.wav',
    'SI': 'assets/audio/10_Y.wav',
    'DO': 'assets/audio/11_H.wav',
    'RE': 'assets/audio/12_U.wav',
    'MI': 'assets/audio/13_J.wav',
    'FA': 'assets/audio/14_I.wav',
    'SOL': 'assets/audio/15_K.wav',
};




let mediaElem = document.getElementById("A");
console.log(mediaElem);

mediaElem.load();

function playAudio() {
  return new Promise((resolve, reject) => {
    const tuboA = document.getElementById("A");

    tuboA.addEventListener("loadeddata", function() {
      console.log("probando");
      // Puedes agregar más lógica aquí si es necesario antes de resolver
      resolve(tuboA);
    });

  });
}


  const audio = new Audio(audioFiles[note]);
  audio.play();

const tubes = document.querySelectorAll('.tube');

// Agregar eventos a los tubos
tubes.forEach((tube) => {
  const note = tube.dataset.key;
  tube.addEventListener('mouseover', function () {
    console.log("Hola MUndo");
    playAudio(note);
  });

tube.addEventListener('touchstart', function () {
    playAudio(note);
  });
});

// Función para manejar eventos de teclado
function handleKeyPress(event) {
  const key = event.key.toLowerCase();
  console.log(key);
  if (audioFiles[key]) {
    playAudio(key);
  }
}


document.addEventListener('keydown', handleKeyPress);

