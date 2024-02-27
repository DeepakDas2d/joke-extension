let url = "https://icanhazdadjoke.com/slack";
fetch(url)
  .then((data) => data.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
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
