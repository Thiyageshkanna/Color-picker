const color = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btns = document.querySelector(".btns");
const name = document.querySelector("span");

btns.addEventListener("click", function () {
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor += color[getrandomnumber()];
  }
  name.textContent = hexcolor;
  document.body.style.backgroundColor = hexcolor;
});

function getrandomnumber() {
  return Math.floor(Math.random() * color.length);
}
