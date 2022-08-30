//creating dom elements
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

//adding each child event listener and setColor fonction
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

//adding and removing classes for different situations
function setColor() {
  if (count.innerHTML > 0) {
    count.classList.add("addColor");
    count.classList.remove("subtractColor", "resetColor");
  } else if (count.innerHTML < 0) {
    count.classList.add("subtractColor");
    count.classList.remove("addColor", "resetColor");
  } else {
    count.classList.add("resetColor");
    count.classList.remove("addColor", "subtractColor");
  }
}
