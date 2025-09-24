class Header extends HTMLElement {
  isThrottled = false;
  boundHandleScroll;
  initialScroll = true;

  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    this.boundHandleScroll = this._handleScroll.bind(this);

    this.innerHTML = /* html */ `
        <style>
            @layer common {
                tr-header {
                    display: block;
                    z-index: 50;
                    position: sticky;
                    top: 0;
                    background: var(--color-darkblue-500, #00263e);
                    padding: .85rem 1.5rem 1rem 1.25rem;
                    color: white;
                    transition: row-gap 0.3s ease-in-out;

                    nav {
                        display: flex;
                        align-items: center;
                    }

                    a {
                        color: white;
                        text-decoration: none;
                    }

                    .retninger-logo,
                    .politi-logo {
                        /* Add transitions for smooth hide/show */
                        transition: opacity 0.3s ease-in-out,
                                    max-height 0.3s ease-in-out, /* Slightly longer for collapse */
                                    margin 0.3s ease-in-out,
                                    padding 0.3s ease-in-out,
                                    border 0.3s ease-in-out;
                        overflow: hidden; /* Needed for max-height transition */
                        max-height: 200px;
                    }

                    .retninger-logo {
                        display: flex;
                        align-items: center; 
                        gap: .5rem;
                        grid-column: 1 / 1;
                    }

                    .politi-logo {
                        width: 115px;
                        height: 32px;
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

                        .politi-logo {
                            grid-column: 2 / 2;
                            margin-left: auto;
                        }

                        nav {
                            grid-column: 1 / span 2;
                            justify-content: space-between;
                            gap: 1rem;
                        }

                        &:not(.scrolled-past-top) {
                            row-gap: 1.25rem;
                        }

                        &.scrolled-past-top {
                            row-gap: 0;

                            .retninger-logo, 
                            .politi-logo {
                                opacity: 0;
                                max-height: 0;
                                margin-top: 0;
                                margin-bottom: 0;
                                padding-top: 0;
                                padding-bottom: 0;
                                border: none; /* Hide any borders */
                            }
                        }
                    }
                }
            }
        </style>
        <a class="retninger-logo" href="/">
            <img src="/images/logo.svg" alt="" style="height: 1.75rem; width: auto;" />
            <tr-fancy-link data-active-url-match="/">
                <span style="font-size: 1.2rem;">Retninger</span>
            </tr-fancy-link>
        </a>
        <a class="politi-logo" href="/">
            <img src="/images/politiet.svg" alt="Politiets logo" />
        </a>
        <nav>
            <tr-fancy-link data-active-url-match="/brukeropplevelse/">
                <a href="/brukeropplevelse">Brukeropplevelse</a>
            </tr-fancy-link>
            <tr-fancy-link data-active-url-match="/team/">
                <a href="/team">Team</a>
            </tr-fancy-link>
            <tr-fancy-link data-active-url-match="/teknologi/">
                <a href="/teknologi">Teknologi</a>
            </tr-fancy-link>
            <tr-fancy-link data-active-url-match="/folk/">
                <a href="/folk">Folk</a>
            </tr-fancy-link>
        </nav>`;

    this.initialScrollY = window.scrollY;

    // Delay attaching the scroll listener slightly
    // requestAnimationFrame waits for the next paint, often enough
    requestAnimationFrame(() => {
      window.addEventListener("scroll", this.boundHandleScroll, {
        passive: true,
      });
    }, 200);
  }

  disconnectedCallback() {
    // Clean up listener when element is removed from DOM
    window.removeEventListener("scroll", this.boundHandleScroll);
  }

  _handleScroll() {
    // Don't check scrolled until user actually scrolls
    if (this.initialScroll) {
      this.initialScroll = false;
      return;
    }

    // Throttle the handler execution
    if (this.isThrottled) return;

    this.isThrottled = true;

    setTimeout(() => {
      this.isThrottled = false; // Reset throttle flag after delay

      const isScrolled = window.scrollY > 10;

      if (isScrolled) {
        this.classList.add("scrolled-past-top");
      } else {
        // Remove class if not mobile OR not scrolled (or both)
        this.classList.remove("scrolled-past-top");
      }
    }, 100);
  }
}
customElements.define("tr-header", Header);
