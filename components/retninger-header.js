class RetningerHeader extends HTMLElement {
  connectedCallback() {
    const originalContent = {
      title: this.querySelector('[slot="title"]'),
      content: this.querySelector('[slot="content"]'),
    };

    const titleHTML = originalContent.title
      ? this.getHTML(originalContent.title)
      : "";
    const contentHTML = originalContent.content
      ? this.getHTML(originalContent.content)
      : "";

    // Replace the component's content
    this.innerHTML = /* html */ `
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

  getHTML(element) {
    return element.hasAttribute("data-inner-only")
      ? element.innerHTML
      : element.outerHTML;
  }
}
customElements.define("tr-retninger-header", RetningerHeader);
