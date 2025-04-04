class Footer extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    this.innerHTML = /* html */ `
        <style>
          @layer common {
            .tr-footer {
              background: var(--color-darkblue-500, #D0E2F3);
              padding: 3rem 1.5rem 5rem 1.25rem;
              
              nav {
                  font-size: .9em;
              }

              a {
                color: white;
              }

              @media (min-width: 600px) {
                display: flex;
                justify-content: space-between;

                nav {
                  display: flex;
                  flex-wrap: wrap;
                  align-items: center;
                  gap: 2rem;
                }
              }

              @media (max-width: 600px) {
                display: grid;
                gap: 1.5rem;

                nav {
                  display: grid;
                  gap: 1.5rem;
                  
                  > * {
                    width: fit-content;
                  }
                }
              }

            }
          }
        </style>
        <footer class="tr-footer">
            <img class="politi-logo" src="/images/politiet.svg" alt="Politiets logo" />
            <nav>
                <tr-fancy-link>
                  <a href="/brukeropplevelse">BRUKEROPPLEVELSE</a>
                </tr-fancy-link>
                <tr-fancy-link>
                  <a href="/team">TEAM</a>
                </tr-fancy-link>
                <tr-fancy-link>
                  <a href="/teknologi">TEKNOLOGI</a>
                </tr-fancy-link>
                <tr-fancy-link>
                  <a href="/folk">FOLK</a>
                </tr-fancy-link>
            </nav>
        </footer>`;
  }
}
customElements.define("tr-footer", Footer);
