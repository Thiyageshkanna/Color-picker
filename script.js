const color = [
  "red",
  "green",
  "blue",
  "yellow",
  "rgb(255,160,122)",
  "rgb(250,128,114)",
  "rgb(233,150,122)",
  "Aquamarine",
  "Azure",
  "Crimson",
  "DarkOliveGreen",
  "DarkGray",
  "FireBrick",
  "Gold",
  "HotPink",
  "IndianRed",
  "Magenta",
  "MediumSeaGreen",
  "Navy",
  "OrangeRed",
  "PaleVioletRed",
  "Salmon",
];

const btns = document.querySelector(".btns");
const name = document.querySelector("span");

btns.addEventListener("click", function () {
  const randomnumber = getrandomnumber();
  document.body.style.backgroundColor = color[randomnumber];
  name.textContent = color[randomnumber];
  document.querySelector("span").style.color = color[randomnumber];
});

function getrandomnumber() {
  return Math.floor(Math.random() * color.length);
}
