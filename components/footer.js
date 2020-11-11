class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="bg-dark text-white-50 pt-5">
        <div class = "container-fluid">
        <div class="row">
          
          <div class="col">
            <p class="font-weight-bold oswald">Information</p>
            <ul class="list-unstyled">
              <li><a href="rehearsal.html">Rehearsal</a></li>
              <li><a href="recording.html">Recording</a></li>
              <li><a href="lockups.html">Lock-Ups</a></li>
              <li><a href="venue.html">Venue</a></li>
            </ul>
          </div>

          <div class="col">
            <p class="font-weight-bold oswald">Talk To Us</p>
            <ul class="list-unstyled">
              <li><a href="contact.html">Contact Page</a></li>
              <li><a href="tel:0121 622 7110">0121 622 7110</a></li>
              <li>14 Rea Street South Digbeth Birmingham B5 6LB</li>
              <li>Find us on <a href="https://goo.gl/maps/CSzHSv2C4reGtK1C9">Google Maps</a></li>
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
            <p>Creative hub in digbeth, Birmingham providing; music rehearsal spaces; recording, mixing, mastering; and live performance venue</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text-center m-0">Site built by <a href="#">William Smallman-Köpf</a></p>
            <p class="text-center m-0">Photo & Video - <a href="https://www.thomasallanwagstaff.com/">Thomas Wagstaff</a></p>
            <p class="text-center m-0">Copyright &#169; 2020. Muthers Ltd. All rights reserved</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm text-center" id="footerLinks">
            <p><a href="contact.html">Contact us</a> - <a href="#">Privacy Policy</a> - <a href="#">Terms of Use</a> - <a href="#">Sitemap</a></p>
          </div>
          <div class="col-1-sm">
            <p>
            <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/"><i class="fab fa-youtube"></i></a>
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