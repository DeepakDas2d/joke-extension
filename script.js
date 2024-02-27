let hindiApi =
  "https://hindi-jokes-api.onrender.com/jokes?api_key=844654189a6b05c47cf0b6daac44";
let engApi = "https://icanhazdadjoke.com/slack";
let colors = ["red", "blue", "green", "crimson", "pink", "black"];

const setBgColor = () => {
  let jokeElement = document.getElementById("jokeElement");
  const randomNumber = Math.floor(Math.random() * colors.length);
  jokeElement.style.backgroundColor = colors[randomNumber];
};

function hindiJokes() {
  const jokeElement = document.getElementById("jokeElement");
  jokeElement.innerHTML = "Loading..."; // Display Loading message
  fetch(hindiApi)
    .then((data) => data.json())
    .then((jokeData) => {
      const jokeText = jokeData.jokeContent;
      jokeElement.innerHTML = jokeText;
      setBgColor();
    });
}

function englishJokes() {
  const jokeElement = document.getElementById("jokeElement");
  jokeElement.innerHTML = "Loading...";
  fetch(engApi)
    .then((data) => data.json())
    .then((jokeData) => {
      const jokeText = jokeData.attachments[0].text;
      jokeElement.innerHTML = jokeText;
      setBgColor();
    });
}

document
  .getElementById("hindiJokesButton")
  .addEventListener("click", hindiJokes);
document
  .getElementById("englishJokesButton")
  .addEventListener("click", englishJokes);
