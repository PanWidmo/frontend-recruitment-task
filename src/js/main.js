const modal = document.querySelector("#modal");
const openModal = document.querySelector("#modalButton");
const closeModal = document.querySelector("#closeModal");
const resetClicks = document.querySelector("#resetClicks");
const outputText = document.querySelector("#outputText");
const usersTable = document.querySelector("#usersTable");

//count clicks and add them to local storage (>5 show reset button)
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

  insertDataToTable();
};

//reset clicks count and close modal
resetClicks.onclick = () => {
  localStorage.clear();
  modal.style.display = "none";
  resetClicks.style.display = "none";
};

//close modal on click on X
closeModal.onclick = () => {
  modal.style.display = "none";
};

//close modal when you click beyond it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//fetch data
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
};

//insert data to table
const insertDataToTable = async () => {
  const data = await fetchData();

  data.forEach((user) => {
    let tableRow = document.createElement("tr");

    let cellImieINazwisko = document.createElement("td");
    let cellEmail = document.createElement("td");
    let cellAdres = document.createElement("td");
    let cellTelefon = document.createElement("td");
    let cellNazwaFirmy = document.createElement("td");

    cellImieINazwisko.innerHTML = user.name;
    cellEmail.innerHTML = user.email;
    cellAdres.innerHTML = user.address.city + ", " + user.address.street + ", " + user.address.suite;
    cellTelefon.innerHTML = user.phone;
    cellNazwaFirmy.innerHTML = user.company.name;

    tableRow.appendChild(cellImieINazwisko);
    tableRow.appendChild(cellEmail);
    tableRow.appendChild(cellAdres);
    tableRow.appendChild(cellTelefon);
    tableRow.appendChild(cellNazwaFirmy);

    usersTable.appendChild(tableRow);
  });
};
