import { JSBlock } from "../js-block/js-block";
import { TimerBlock } from "../timer-block/timer-block";
export default class App {
  #jsBlock;
  #timerBlock;
  constructor() {
    this.#jsBlock = new JSBlock();
    this.#timerBlock = new TimerBlock();
  }

  run() {
    const jsBlockHTML = this.#jsBlock.render();
    const timerBlockHtml = this.#timerBlock.render();
    document.body.append(jsBlockHTML, timerBlockHtml);
  }
}
