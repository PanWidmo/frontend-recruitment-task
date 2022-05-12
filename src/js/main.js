const modal = document.querySelector("#modal");
const openModal = document.querySelector("#modalButton");
const closeModal = document.querySelector("#closeModal");

openModal.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
