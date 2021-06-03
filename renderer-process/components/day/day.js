export class Day extends HTMLElement {
  constructor(date) {
    super();
    this.date = date;
    this.number = date.getDate();
    this.innerText = this.number;
    this.addEventListener("click", this.handleClickEvent);
  }

  getDayName() {
    switch (this.date.getDay()) {
      case 0:
        return "Nedele";
      case 1:
        return "Pondeli";
      case 2:
        return "Úterý";
      case 3:
        return "Středa";
      case 4:
        return "Čtvrtek";
      case 5:
        return "Patek";
      case 6:
        return "Sobota";

      default:
        break;
    }
  }

  handleClickEvent() {
    window.showDayModal();
  }
}

customElements.define("app-day", Day);
