//creating dom elements
const number = document.querySelector(".number");
const generateBtn = document.querySelector(".generate");

//function for generate number 1-10

const generateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
};

//adding click event to button

generateBtn.addEventListener("click", generateNumber);

//for creating number when window loads
generateNumber();
