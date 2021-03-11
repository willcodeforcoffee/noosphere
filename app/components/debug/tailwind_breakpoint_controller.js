import { Controller } from "stimulus";

// https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions#8876069
function getBrowserViewportWidth() {
  return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

export default class extends Controller {
  static targets = ["viewPortWidth"];
  static values = {
    viewPortWidth: Number,
    resizeEventListener: Object,
  };

  updateViewPortWidth() {
    const width = getBrowserViewportWidth();
    this.viewPortWidth = width;
    this.viewPortWidthTarget.innerHTML = `${this.viewPortWidth}px`;
  }

  connect() {
    this.resizeEventListener = this.updateViewPortWidth.bind(this);
    window.addEventListener("resize", this.resizeEventListener);
    this.updateViewPortWidth();
  }
  disconnect() {
    window.removeEventListener("resize", this.resizeEventListener);
  }
}
