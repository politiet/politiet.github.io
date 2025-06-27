class RetningHeader extends HTMLElement {}
customElements.define("tr-retning-header", RetningHeader);

class RetningHeaderContent extends HTMLElement {}
customElements.define("tr-retning-header-content", RetningHeaderContent);

class RetningHeaderImage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
      <img
        src="/images/politiapp.svg"
        alt="Politimann som trykker på mobiltelefon, mens smilende dame med kaffekopp og en mann venter"
      />
    `;
  }
}
customElements.define("tr-retning-header-image", RetningHeaderImage);

class RetningPrinsipper extends HTMLElement {}
customElements.define("tr-prinsipper", RetningPrinsipper);

class RetningPrinsipperListe extends HTMLElement {}
customElements.define("tr-prinsipper-liste", RetningPrinsipperListe);

class RetningPrinsipp extends HTMLElement {}
customElements.define("tr-prinsipp", RetningPrinsipp);

class RetningPrinsippSubtitle extends HTMLElement {}
customElements.define("tr-prinsipp-subtitle", RetningPrinsippSubtitle);

class RetningPrinsippBilde extends HTMLElement {}
customElements.define("tr-prinsipp-bilde", RetningPrinsippBilde);

class RetningPrinsippInnhold extends HTMLElement {}
customElements.define("tr-prinsipp-innhold", RetningPrinsippInnhold);
