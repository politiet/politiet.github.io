class RetningerHeader extends HTMLElement {
  connectedCallback() {
    const title = this.querySelector('slot[name="title"]');
    const content = this.querySelector('slot[name="content"]');

    const html = /* html */ `
      <style>
        @layer common {
          tr-retninger-header {
            container: section-1 / inline-size;
            
            h1 {
              font-size: 2em;
            }

            .content-wrapper {
              display: grid;
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
            tr-retninger-header {
              display: flex;
              flex-wrap: wrap;
              gap: 2.5rem;

              h1 {
                font-size: 2em;
              }

              .content-wrapper {
                flex: 1;
                gap: 1.75rem;
              }

              .image-wrapper {
                flex: 1;
              }
            }
          }

          @container main (max-width: 800px) {
            tr-retninger-header {
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
        <h1>${title.getHTML()}</h1>
        ${content.getHTML()}
      </div>
      <div class="image-wrapper">
        <img
          src="/images/politiapp.svg"
          alt="Politimann som trykker på mobiltelefon, mens smilende dame med kaffekopp og en mann venter"
        />
      </div>`;

    this.innerHTML = html;
  }
}
customElements.define("tr-retninger-header", RetningerHeader);
