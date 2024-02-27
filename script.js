let apiKey = "844654189a6b05c47cf0b6daac44";
let hindiApi =
  "https://hindi-jokes-api.onrender.com/jokes?api_key=844654189a6b05c47cf0b6daac44";
let url = "https://icanhazdadjoke.com/slack";
fetch(hindiApi)
  .then((data) => data.json())
  .then((jokeData) => {
    // const jokeText = jokeData.attachments[0].text;
    const jokeText = jokeData.jokeContent;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = jokeText;
    setBgColor();
  });

let colors = ["red", "blue", "green", "crimson", "pink", "black"];
let randumNumber = Math.ceil(Math.random() * 5);
// console.log(colors[randumNumber]);
const setBgColor = () => {
  let jokeElement = document.getElementById("jokeElement");
  jokeElement.style.backgroundColor = colors[randumNumber];
};
