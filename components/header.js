class Header extends HTMLElement {
    constructor() {
        super();
}

connectedCallback() {
    this.innerHTML = `
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="index.html"><img src="images/LogoBlack.png" width="30" height="30" alt="Muthers Logo" loading="lazy"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="timesPrices.html">Open Hours & Prices</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="rehearsal.html">Rehearse</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="recording.html">Record</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="venue.html">Venue</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('header-component', Header);