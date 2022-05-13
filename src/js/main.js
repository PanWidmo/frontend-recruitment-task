const modal = document.querySelector("#modal");
const openModal = document.querySelector("#modalButton");
const closeModal = document.querySelector("#closeModal");
const resetClicks = document.querySelector("#resetClicks");
const outputText = document.querySelector("#outputText");

openModal.onclick = () => {
  modal.style.display = "block";

  if (localStorage.hasOwnProperty("clicks")) {
    localStorage.clicks = Number(localStorage.clicks) + 1;
    outputText.innerHTML = "You have clicked <strong>" + localStorage.clicks + " times </strong> to related button.";
    if (localStorage.clicks > 5) {
      resetClicks.style.display = "block";
    }
  } else {
    localStorage.clicks = 1;
    outputText.innerHTML = "You have clicked <strong>" + localStorage.clicks + " time </strong> to related button.";
  }
};

resetClicks.onclick = () => {
  localStorage.clear();
  modal.style.display = "none";
  resetClicks.style.display = "none";
};

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
