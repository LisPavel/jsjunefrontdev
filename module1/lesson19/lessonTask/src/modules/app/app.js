import { JSBlock } from "../js-block/js-block";

export default class App {
  #jsBlock;
  constructor() {
    this.#jsBlock = new JSBlock();
  }

  run() {
    const jsBlockHTML = this.#jsBlock.render();
    document.body.append(jsBlockHTML);
  }
}
