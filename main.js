const button = document.getElementById("button");
const display = document.getElementById("display");
const image = document.getElementById("cat-image");
const sound = document.getElementById("meow-sound");

async function getData() {
  try {
    const result = await fetch("https://meowfacts.herokuapp.com/");
    const data = await result.json();
    display.textContent = data.data[0];

    const randomParam = Date.now(); // gjør hver URL unik
    image.src = `https://cataas.com/cat?timestamp=${randomParam}`;
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
