//html elements
let result = document.querySelector(".result");
let word = document.querySelector(".word");

//function
function isPalindrome() {
  let checkWord = word.value.split("").reverse().join("");

  if (word.value === "") {
    result.innerHTML = "Please enter a word";
  } else if (word.value === checkWord) {
    result.innerHTML = `${word.value.toUpperCase()} is a Palindrome`;
  } else {
    result.innerHTML = `${word.value.toUpperCase()} is NOT a Palindrome`;
  }
}
//if i start to delete word
word.addEventListener("keyup", isPalindrome);
