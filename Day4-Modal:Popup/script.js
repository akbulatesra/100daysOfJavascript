//variables

const modal = document.querySelector(".modal");
const btn = document.querySelector("#btn");
const close = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

//open modal

function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

//close modal

function closeModal() {
  modalContent.classList.add("slide-up");
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
}
