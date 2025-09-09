class Verktoykasse extends HTMLElement {}
customElements.define("tr-verktoykasse", Verktoykasse);

class VerktoykasseContent extends HTMLElement {}
customElements.define("tr-verktoykasse-content", VerktoykasseContent);

class VerktoykasseHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
        <img src="/images/verktoy.svg" alt="Skrutrekker og skiftenøkkel i kryss" />
        <h1>Verktøykasse</h1>
    `;
  }
}
customElements.define("tr-verktoykasse-header", VerktoykasseHeader);

class VerktoykasseBody extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      this.innerHTML ||
      /* html */ `
          <p style="margin-bottom: 1rem;">Vi vet hva som skal til for at alle kan dele meninger, ideer og tanker uten frykt for å uten frykt for negative konsekvenser for sin egen stilling eller omdømme. Trygghet skaper grobunn for kreativitet, innovasjon, læring og kontinuerlig forbedring.</p>
          <h2>Maler i Miro:</h2>
          <ul>
              <li>Brukerintervju</li>
              <li>Brukerobserveringer</li>
              <li>Målinger som gir innsikt (kvalitative og kvantitative)</li>
          </ul>
      `;
  }
}
customElements.define("tr-verktoykasse-body", VerktoykasseBody);
