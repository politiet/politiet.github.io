class Verktoykasse extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = /* html */ `
        <style>
            .wrapper {
                background: #D0E2F3;
            }

            .content {
                padding: 2.5rem var(--subpage-content-x-padding, 2rem) 2.25rem;
                max-width: var(--subpage-max-width);
                margin: 0 auto;
            }
        </style>
        <section class="wrapper">
            <div class="content">
                <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; margin-bottom: 2rem;">
                    <img src="/images/verktoy.svg" style="width: 90px; height: auto;" alt="Skrutrekker og skiftenøkkel i kryss" />
                    <h1 style="font-size: 1.75rem;">Verktøykasse</h1>
                </div>
                <p>Vi vet hva som skal til for at alle kan dele meninger, ideer og tanker uten frykt for å uten frykt for negative konsekvenser for sin egen stilling eller omdømme. Trygghet skaper grobunn for kreativitet, innovasjon, læring og kontinuerlig forbedring.</p>
                <h2 style="font-size: 1rem; margin-bottom: 0; font-weight: 500;">Maler i Miro:</h2>
                <ul style="margin: 0;">
                    <li>Brukerintervju</li>
                    <li>Brukerobserveringer</li>
                    <li>Målinger som gir innsikt (kvalitative og kvantitative)</li>
                </ul>
            </div>
        </section>
    `;
  }
}
customElements.define("tr-verktoykasse", Verktoykasse);
