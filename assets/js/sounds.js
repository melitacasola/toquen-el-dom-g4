export function playAudio(noteKey, audioFiles) {
  const audioElement = new Audio(audioFiles[noteKey]);
  audioElement.play();
}

export function handleTubeClick(tube) {
  const noteKey = tube.dataset.key;
  const audioElement = document.getElementById(noteKey);

  if (audioElement) {
    audioElement.play();
  } else {
    console.error(`Elemento de audio no encontrado para la nota: ${noteKey}`);
  }
}

export function handleKeyPress(event, audioFiles) {
  let key = event.key.length === 1 ? event.key.toUpperCase() : event.key;

  if (audioFiles[key]) {
    playAudio(key, audioFiles);
  } else {
    console.error(`Elemento de audio no encontrado para la tecla: ${key}`);
  }
}

export function handleTubeTouchStart() {
  const tubes = document.querySelectorAll('.tube');

  tubes.forEach((tube) => {
    tube.addEventListener('click', () => handleTubeClick(tube));
  });
}

export function setupMenuEvent() {
  const menuIcon = document.getElementById("menuBurger");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener('click', function () {
    menu.classList.toggle("show");
  });
}
