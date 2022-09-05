//html elements

let inputText = document.querySelector(".textInput");
let result = document.querySelector(".result");

//function

function vowelCounter(e) {
  const vowels = ["a", "e", "i", "o", "u"];
  const founded = inputText.value.split("").filter((element) => {
    if (vowels.includes(element)) {
      return true;
    }
  });
  if (founded.length === 0) {
    result.innerHTML = "There is no vowel";
  } else if (founded.length === 1) {
    result.innerHTML = "There is one vowel";
  } else {
    result.innerHTML = `There is ${founded.length} vowels`;
  }
}

inputText.addEventListener("keyup", vowelCounter);
