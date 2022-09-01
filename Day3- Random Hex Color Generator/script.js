//creating dom elements

let hexCode = document.querySelector(".hexCode");
let generatorBtn = document.querySelector(".generate");

//function
const generateColor = () => {
  let randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = `#${randomColor}`;
  hexCode.innerHTML = `#${randomColor}`;
};

//adding click event to buton
generatorBtn.addEventListener("click", generateColor);
