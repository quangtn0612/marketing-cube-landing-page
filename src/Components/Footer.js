import React from "react";
import {
  Nav,
  Navbar,
  Container,
  FloatingLabel,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <div class="container p-3 bg-danger text-white footer-custom">
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h3>
                <small>About</small>
              </h3>
              <p class="text-justify">
                Aliquam lobortis lorem quis augue ornare, vel posuere arcu
                aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae;
              </p>
            </div>
            <div class="col-xs-6 col-md-3">
              <h3>
                <small>Service</small>
              </h3>
              <ul class="footer-links">
                <li>
                  <a href="#">Imperdiet</a>
                </li>
                <li>
                  <a href="#">Integer</a>
                </li>
                <li>
                  <a href="#">Sed</a>
                </li>
                <li>
                  <a href="#">Condimentum</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-6 col-md-3">
              <h3>
                <small>Quick Links</small>
              </h3>
              <ul class="footer-links">
                <li>
                  <a href="#">Cras</a>
                </li>
                <li>
                  <a href="#">Arcu</a>
                </li>
                <li>
                  <a href="#">Viverra</a>
                </li>
                <li>
                  <a href="#">Fermentum</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by MarketingCube
              </p>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a
                    class="facebook"
                    href="https://www.facebook.com/MarketingCube/"
                  >
                    <div class="fa fa-facebook"></div>
                  </a>
                </li>
                <li>
                  <a
                    class="twitter"
                    href="https://twitter.com/marketingcube?lang=en"
                  >
                    <div class="fa fa-twitter"></div>
                  </a>
                </li>
                <li>
                  <a
                    class="dribbble"
                    href="https://dribbble.com/shots/6478858-Marketing-magic-cube-Web-Page"
                  >
                    <div class="fa fa-dribbble"></div>
                  </a>
                </li>
                <li>
                  <a
                    class="linkedin"
                    href="https://www.linkedin.com/company/marketing-cube/"
                  >
                    <div class="fa fa-linkedin"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
