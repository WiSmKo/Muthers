class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="pt-5">
        <div class = "container">
        <div class="row">
          
          <div class="col">
            <p class="font-weight-bold oswald">Information</p>
            <ul class="list-unstyled">
              <li><a href="lockups.html">Times & Prices</a></li>
              <li>
              <a href="rehearsal.html">Rehearsal</a>
                <ul>
                  <li><a href="rehearsal.html">Hourly rooms</a></li>
                  <li><a href="rehearsal.html">Lock-Ups</a></li>
                </ul>
              </li>
              
              <li><a href="recording.html">Recording</a></li>
              <li><a href="venue.html">Venue</a></li>
            </ul>
          </div>

          <div class="col">
            <p class="font-weight-bold oswald">Talk To Us</p>
            <ul class="list-unstyled">
              <li><a href="contact.html">Contact Page</a></li>
              <li><a href="tel:0121 622 7110">0121 622 7110</a></li>
              <li>14 Rea Street South Digbeth Birmingham B5 6LB</li>
              <li>Find us on <a target="_blank" href="https://goo.gl/maps/CSzHSv2C4reGtK1C9">Google Maps</a></li>
            </ul>
          </div>

          <div class="col-sm">
            <p class="font-weight-bold oswald">Keep Posted</p>
            Sign up to our monthly news letter to stay informed on our latest news and events:
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="email" placeholder="Email address" aria-label="Email">
              <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">&#128269;</button>
            </form>
          </div>
          <div class="col">
            <p class="font-weight-bold oswald">About Us</p>
            <p>Rehearsal and recording studio in Digbeth, Birmingham providing; hourly rooms and lock-ups; recording, mixing, mastering and a live performance venue.</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text-center m-0">Site built by <a target="_blank" href="https://wismko.github.io/portfolio/">William Smallman-Köpf</a></p>
            <p class="text-center m-0">Photo & Video - <a target="_blank" href="https://www.thomasallanwagstaff.com/">Thomas Wagstaff</a></p>
            <p class="text-center m-0">Copyright &#169; 2020. Muthers Ltd. All rights reserved</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm text-center" id="footerLinks">
            <p><a href="contact.html">Contact us</a> - <a href="#">Privacy Policy</a> - <a href="#">Terms of Use</a> - <a href="#">Sitemap</a></p>
          </div>
          <div class="col-1-sm">
            <p>
            <a target="_blank" href="https://www.facebook.com/MuthersStudio/"><i class="fab fa-facebook"></i></a>
            <a target="_blank" href="https://www.instagram.com/muthersstudio/"><i class="fab fa-instagram"></i></a>
            <a target="_blank" href="https://www.youtube.com/channel/UC2tKGKhXzEAZC6ioLYBIpHw"><i class="fab fa-youtube"></i></a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </footer>  
      `;
    }
  }
  
  customElements.define('footer-component', Footer);