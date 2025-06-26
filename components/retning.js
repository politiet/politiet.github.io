class RetningHeader extends HTMLElement {
  connectedCallback() {
    const originalContent = {
      title: this.querySelector('[slot="title"]'),
      content: this.querySelector('[slot="content"]'),
    };

    const titleHTML = originalContent.title
      ? TR.getHTML(originalContent.title)
      : "";
    const contentHTML = originalContent.content
      ? TR.getHTML(originalContent.content)
      : "";

    // Replace the component's content
    this.innerHTML = /* html */ `
      <style>
        @layer component {
          tr-retning-header {
            container: section-1 / inline-size;

            h1 {
              font-size: 2em;
            }

            .content-wrapper {
              display: flex;
              flex-direction: column;
            }

            .image-wrapper {
              img {
                width: 30rem;
                height: auto;
                margin: 0 auto;
              }
            }
          }

          @container main (min-width: 800px) {
            tr-retning-header {
              display: flex;
              flex-wrap: wrap;
              gap: 2.5rem;

              h1 {
                font-size: 2em;
              }

              .content-wrapper {
                flex: 1;
                gap: 1.75rem;
                font-size: 1.3rem;
              }

              .image-wrapper {
                flex: 1;
              }
            }
          }

          @container main (max-width: 800px) {
            tr-retning-header {
              display: grid;
              gap: 1.75rem;

              .content-wrapper {
                gap: 1rem;
              }

              .image-wrapper {
                order: -1;
                text-align: center;
              }
            }
          }
        }
      </style>
      <div class="content-wrapper">
        ${titleHTML}
        ${contentHTML}
      </div>
      <div class="image-wrapper">
        <img
          src="/images/politiapp.svg"
          alt="Politimann som trykker på mobiltelefon, mens smilende dame med kaffekopp og en mann venter"
        />
      </div>`;
  }
}
customElements.define("tr-retning-header", RetningHeader);

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
