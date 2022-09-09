//html elements
const btn = document.querySelector(".btn");
const inputText = document.querySelector(".input");

//function
const copyText = () => {
  navigator.clipboard.writeText(inputText.value).then(() => {
    btn.textContent = "COPIED!!";
    setTimeout(() => {
      btn.textContent = "COPY";
    }, 3000);
  });
};

//add click event
btn.addEventListener("click", copyText);
