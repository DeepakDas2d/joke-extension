let hindiApi =
  "https://hindi-jokes-api.onrender.com/jokes?api_key=844654189a6b05c47cf0b6daac44";
let engApi = "https://icanhazdadjoke.com/slack";

const setBgColor = () => {
  let colors = ["red", "blue", "green", "crimson", "pink", "black"];
  let randumNumber = Math.ceil(Math.random() * 5);
  let jokeElement = document.getElementById("jokeElement");
  jokeElement.style.backgroundColor = colors[randumNumber];
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
