import "./components/carousel/carousel.js";
import { Day } from "./components/day/day.js";

const carousel = document.querySelector("app-carousel");

fetch("http://localhost:3000/news.json")
  .then((serverResponse) => serverResponse.text())
  .then((responseText) => {
    const data = JSON.parse(responseText);
    carousel.populateNewsCarousel(data.articles);
  });

const mainContent = document.querySelector("section.main-content");

const currentDate = new Date();
const maxDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
).getDate();

for (let i = 1; i <= maxDate; i++) {
  const dayDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    i
  );
  mainContent.appendChild(new Day(dayDate));
}

function showDayModal() {
  const template = document.querySelector("#modal-template");
  const modal = template.content.cloneNode(true);
  const closeAction = () => {
    const child = document.querySelector("section.modal-container");
    document.body.removeChild(child);
  };
  modal.querySelector("#close-modal").addEventListener("click", closeAction);
  const cancelButton = modal.querySelector("#cancel-button");
  cancelButton.addEventListener("click", closeAction);

  modal.querySelector("#save-button").addEventListener("click", () => {
    const formRef = document.querySelector("#modal-form");
    const formData = new FormData(formRef);
    const data = formData.entries();

    const object = { };
    for (let formValue of Data)



    //const isHoliday = formData.get("isHolidayControl") === "on";
  });

  document.body.appendChild(modal);

  let contactsArray;

  fetch("http://localhost:3000/contacts")
    .then((serverResponse) => serverResponse.text())
    .then((responseText) => {
      contactsArray = JSON.parse(responseText);
      createOptions(contactsArray);
    });

  const radioButtons = document.querySelectorAll("#genderSelectRow >input");

  for (let radio of radioButtons) {
    radio.addEventListener("change", () => {
      const formRef = document.querySelector("#modal-form");
      const formData = new FormData(formRef);
      const gender = formData.get("gender");
      const filteredContacts = contactsArray.filter(
        (contact) => contact.gender === gender
      );
      createOptions(filteredContacts);
    });
  }

  const genderCheckbox = document.querySelector("#limitAttendeesByGender");
  const genderRadioRow = document.querySelector("#genderSelectRow");
  genderCheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      genderRadioRow.classList.remove("hidden");
    } else {
      genderRadioRow.classList.add("hidden");
    }
  });
}

function createOptions(contactsArray) {
  const contactSelect = document.querySelector("#eventAttendees");
  const oldOptions = document.querySelectorAll(".hakunamatata");
  oldOptions.forEach((opt) => {
    contactSelect.removeChild(opt);
  });
  contactsArray.forEach((contact) => {
    const option = document.createElement("option");
    option.innerText = `${contact.first_name} ${contact.last_name}`;
    option.setAttribute("value", contact.id);
    option.classList.add("hakunamatata");
    contactSelect.appendChild(option);
  });
}

window.showDayModal = showDayModal;
