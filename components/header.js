class Header extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    this.innerHTML = /* html */ `
        <style>
            @layer common {
                .tr-header {
                    background: var(--color-darkblue-500, #00263e);
                    padding: 1rem 1.5rem 1rem 1.25rem;
                    color: white;
                    position: relative;

                    nav {
                        display: flex;
                        align-items: center;
                    }

                    nav a, 
                    .retninger-logo span {
                        border-bottom: 3px solid transparent;
                        position: relative;
                        top: 3px;

                        &:hover {
                            border-color: var(--color-brightyellow, #FDDA25);
                        }
                    }

                    a {
                        color: white;
                        text-decoration: none;
                    }

                    .retninger-logo {
                        display: flex;
                        align-items: center; 
                        gap: .5rem;
                        grid-column: 1 / 1;
                    }
                    
                    @media (min-width: 1200px) {
                        .politi-logo {
                            position: absolute;
                            left: calc(50% - (115px / 2));
                        }
                    }
                    
                    @media (min-width: 800px) {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        align-items: center;

                        nav {
                            gap: 2.5rem;
                        }
                    }
                    
                    @media (max-width: 800px) {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        row-gap: 1.25rem;

                        .politi-logo {
                            grid-column: 2 / 2;
                            margin-left: auto;
                        }

                        nav {
                            grid-column: 1 / span 2;
                            justify-content: space-between;
                            gap: 1rem;
                        }
                    }
                }
            }
        </style>
        <header class="tr-header">
            <a class="retninger-logo" href="/">
                <img src="/images/logo.svg" alt="" style="height: 1.75rem; width: auto;" />
                <span style="font-size: 1.2rem;">Retninger</span>
            </a>
            <img class="politi-logo" src="/images/politiet.svg" alt="Politiets logo" />
            <nav>
                <a href="/brukeropplevelse">Brukeropplevelse</a>
                <a href="/team">Team</a>
                <a href="/teknologi">Teknologi</a>
                <a href="/folk">Folk</a>
            </nav>
        </header>`;
  }
}
customElements.define("tr-header", Header);
