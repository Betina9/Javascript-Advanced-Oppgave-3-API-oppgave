const button = document.getElementById("button");
const display = document.getElementById("display");
const image = document.getElementById("cat-image");

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
});

window.addEventListener("DOMContentLoaded", getData);
