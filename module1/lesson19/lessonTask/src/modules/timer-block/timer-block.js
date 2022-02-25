import "./timer-block.css";

export class TimerBlock {
  #date;
  #timerContainer;
  #timerTextHTML;

  constructor(date) {
    this.#date = date;
    this.#timerContainer = document.createElement("div");
    this.#timerTextHTML = document.createElement("h2");
  }

  render() {
    this.#timerContainer.id = "timer";
    this.#timerTextHTML.className = "timer-text";
    this.#timerTextHTML.textContent = "TIME";

    const todayDateHtml = document.createElement("div");
    todayDateHtml.className = "today-date";
    todayDateHtml.textContent = new Date();

    this.#timerContainer.append(this.#timerTextHTML, todayDateHtml);

    return this.#timerContainer;
  }
}
