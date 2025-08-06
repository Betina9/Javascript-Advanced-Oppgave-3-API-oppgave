const button = document.getElementById("button");
const display = document.getElementById("display");

async function getData() {
  const result = await fetch("https://meowfacts.herokuapp.com/");

  const data = await result.json();
  display.textContent = data.data[0];
}
button.addEventListener("click", () => {
  getData();
});
