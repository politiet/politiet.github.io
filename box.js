class Box extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }
}
customElements.define("tr-box", Box);
