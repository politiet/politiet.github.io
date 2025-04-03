class Verktoykasse extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    this.innerHTML = /* html */ `
        <style>
            @layer common {
                .tr-verktoykasse {
                    background: var(--color-lightblue-300, #D0E2F3);

                    .content {
                        padding: 2.5rem var(--subpage-content-x-padding, 2rem) 2.25rem;
                        max-width: var(--subpage-max-width);
                        margin: 0 auto;
                    }
                }
            }
        </style>
        <section class="tr-verktoykasse">
            <div class="content">
                <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; margin-bottom: 2rem;">
                    <img src="/images/verktoy.svg" style="width: 90px; height: auto;" alt="Skrutrekker og skiftenøkkel i kryss" />
                    <h1 style="font-size: 1.75rem;">Verktøykasse</h1>
                </div>
                <p style="margin-bottom: 1rem;">Vi vet hva som skal til for at alle kan dele meninger, ideer og tanker uten frykt for å uten frykt for negative konsekvenser for sin egen stilling eller omdømme. Trygghet skaper grobunn for kreativitet, innovasjon, læring og kontinuerlig forbedring.</p>
                <h2 style="font-size: 1rem; font-weight: 500;">Maler i Miro:</h2>
                <ul>
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
