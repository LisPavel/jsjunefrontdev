import "./timer-block.css";
// import { getTodayDateFormat, getPreciseDateDifference } from "@utils/date";
import * as DateUtils from "@utils/date";
export class TimerBlock {
  #date;
  #timerContainer;
  #timerTextHTML;

  constructor(date) {
    this.#date = date;
    this.#timerContainer = document.createElement("div");
    this.#timerTextHTML = document.createElement("h2");
  }

  #getTimerContent() {
    return DateUtils.getPreciseDateDifference(new Date(), this.#date);
  }

  #enableDateUpdate() {
    setInterval(() => {
      this.#timerTextHTML.textContent = this.#getTimerContent();
    }, 1000);
  }

  render() {
    this.#timerContainer.id = "timer";
    this.#timerTextHTML.className = "timer-text";
    this.#timerTextHTML.textContent = this.#getTimerContent();

    const todayDateHtml = document.createElement("div");
    todayDateHtml.className = "today-date";
    const todayDateFormat = DateUtils.getTodayDateFormat(new Date());
    todayDateHtml.textContent = `(Сегодня: ${todayDateFormat})`;

    this.#timerContainer.append(this.#timerTextHTML, todayDateHtml);

    this.#enableDateUpdate();

    return this.#timerContainer;
  }
}
