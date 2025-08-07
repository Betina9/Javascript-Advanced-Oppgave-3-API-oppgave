const button = document.getElementById("button");
const muteBtn = document.getElementById("mute");
const display = document.getElementById("display");
const image = document.getElementById("cat-image");
const sound = document.getElementById("meow-sound");

let isMuted = false;

async function getData() {
  try {
    const result = await fetch("https://meowfacts.herokuapp.com/");
    const data = await result.json();
    display.textContent = data.data[0];

    const randomParam = Date.now(); // gjør hver URL unik
    image.src = `https://cataas.com/cat?timestamp=${randomParam}`;

    if (isMuted) {
      sound.currentTime = 0;
      sound.play();
    }
  } catch (error) {
    display.textContent = "Kunne ikke hente fakta 😿";
    console.error(error);
  }
}

button.addEventListener("click", () => {
  getData();
  sound.play();
});

window.addEventListener("DOMContentLoaded", getData);

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  sound.muted = isMuted;
  muteBtn.textContent = isMuted ? "🔇" : "🔊";
});
