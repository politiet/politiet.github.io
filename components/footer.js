class Footer extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = /* html */ `
        <style>
          footer {
            background: #00263e;
            padding: 3rem 1.5rem 5rem 1.25rem;
            display: flex;
            justify-content: space-between;
          }
          
          nav {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              gap: 2rem;
              font-size: .9em;
            }

          nav a {
              border-bottom: 3px solid transparent;
              position: relative;
              top: 3px;

              &:hover {
                  border-color: #FDDA25;
              }
          }

          a {
              color: white;
                  text-decoration: none;
          }

        </style>
        <footer>
            <img class="politi-logo" src="/images/politiet.svg" alt="Politiets logo" />
            <nav>
                <a href="/brukeropplevelse">BRUKEROPPLEVELSE</a>
                <a href="/team">TEAM</a>
                <a href="/teknologi">TEKNOLOGI</a>
                <a href="/folk">FOLK</a>
            </nav>
        </footer>`;
  }
}
customElements.define("tr-footer", Footer);
