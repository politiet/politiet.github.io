class Box extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define("tr-box", Box);

class FillContent extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define("tr-fill-content", FillContent);

class FancyLink extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define("tr-fancy-link", FancyLink);

class AccordionContent extends HTMLElement {
  static observedAttributes = ["data-visible"];

  constructor() {
    super();
  }

  connectedCallback() {
    const contentWrapperAttribute = "data-accordion-content-wrapper";
    let wrapper = this.querySelector(`[${contentWrapperAttribute}]`);
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.setAttribute(contentWrapperAttribute, "");
      wrapper.replaceChildren(...this.childNodes);
      this.replaceChildren(wrapper);
    }
  }
}
customElements.define("tr-accordion-content", AccordionContent);

class AccordionButton extends HTMLElement {
  static observedAttributes = ["contentSelector"];
  /**
   * @type ClickEvent
   */
  clickEvent;
  /**
   * @type ChildNode[] | Element
   */
  openButtonHTML;
  /**
   * @type ChildNode[] | Element
   */
  closeButtonHTML;

  constructor() {
    super();
  }

  connectedCallback() {
    // Initialize
    const openButton = this.querySelector('slot[name="open-button"]');
    this.openButtonHTML = openButton
      ? Array.from(openButton.childNodes)
      : (() => {
          const a = document.createElement("a");
          a.href = "";
          const img = document.createElement("img");
          img.src = "/images/pil-ned.svg";
          img.alt = "";
          a.appendChild(img);
          a.append(" Les mer");
          return a;
        })();

    const closeButton = this.querySelector('slot[name="close-button"]');
    this.closeButtonHTML = closeButton
      ? Array.from(closeButton.childNodes)
      : (() => {
          const a = document.createElement("a");
          a.href = "";
          const img = document.createElement("img");
          img.src = "/images/pil-ned.svg";
          img.alt = "";
          img.style.transform = "rotate(180deg)";
          a.appendChild(img);
          a.append(" Vis mindre");
          return a;
        })();

    this.setAttribute("data-initialized", "true");

    this._setupCallbacks();
    this._setButton();
  }

  disconnectedCallback() {
    this._removeClickListener();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "contentSelector") {
      this._setupCallbacks();
    }
  }

  _setupCallbacks() {
    this._removeClickListener();
    this._addClickListener();
  }

  _addClickListener() {
    this.clickEvent = this.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const target = this._getTarget();
      const isVisible = this._getIsVisible(target);
      if (isVisible) {
        target.removeAttribute("data-visible");
      } else {
        target.setAttribute("data-visible", "true");
      }

      this._setButton();
    });
  }

  _removeClickListener() {
    if (this.clickEvent) {
      this.removeEventListener(this.clickEvent);
    }
  }

  _setButton() {
    const isVisible = this._getIsVisible();
    const children = isVisible ? this.closeButtonHTML : this.openButtonHTML;
    if (Array.isArray(children)) {
      this.replaceChildren(...children);
    } else {
      this.replaceChildren(children);
    }
  }

  _getIsVisible(targetIn) {
    const target = targetIn || this._getTarget();
    return Boolean(target.getAttribute("data-visible"));
  }

  _getTarget() {
    const selector = this.getAttribute("contentSelector");
    if (!selector) {
      console.error(
        `Accordion: selector '${selector}' ikke funnet i dokumentet.`
      );
      return;
    }

    const target = document?.querySelector(selector);
    if (!target) {
      console.error(
        `Accordion: target med selector '${selector}' ikke funnet i dokumentet.`
      );
      return;
    }

    return target;
  }
}
customElements.define("tr-accordion-button", AccordionButton);
