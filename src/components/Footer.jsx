import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div>
      <div id="divider-7"></div>
      <footer>
        <div className="footer">
          <div className="row text-left footer-row">
            <div className="col-sm-3">
              <h4 className="footer-title">Dinner Hours</h4>
              <div id="divider-1"></div>
              <br />
              <div className="footer-details">
                Monday-Thursday 3pm to 9:45pm
                <br />
                Friday & Saturday 3pm to 9:30pm
              </div>

              <h4 className="footer-title">Bar Hours</h4>
              <div id="divider-1"></div>
              <br />
              <div className="footer-details">
                Monday-Thursday 3pm to 9:30pm
                <br />
                Friday & Saturday 3pm to 11:45pm
              </div>
            </div>
            <div className="col-sm-3">
              <h4 className="footer-title">Location</h4>
              <div id="divider-1"></div>
              <br />
              <div className="footer-details">
                111 W 2nd St.
                <br />
                Davenport, IA 52801
              </div>
            </div>
            <div className="col-sm-3">
              <h4 className="footer-title">Contact</h4>
              <div id="divider-1"></div>
              <br />
              <div className="footer-details">
                Embers of the Phoenix Restaurant & Martini Bar
                <br />
                Phone: (563) 323-2345
                <br />
                Email:{" "}
                <a
                  href="mailto:thephoenixofdavenport@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="email-link"
                >
                  thephoenixofdavenport@gmail.com
                </a>
              </div>
              <div>
                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/phoenixofdavenport"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="Facebook-link"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/phoenix_davenport/"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="Instagram-link"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-instagram-square" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/ThePhoenixqc"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="Twitter-link"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 Sitemap">
              <h4 className="footer-title">Sitemap</h4>
              <div id="divider-1"></div>
              <br />
              <div>
                <ul>
                  <li>
                    <a href="./">Home</a>
                  </li>
                  <li>
                    <a href="./About.jsx">About</a>
                  </li>
                  <li>
                    <a href="./">Dinner Menus</a>
                  </li>
                  <li>
                    <a href="./">Homemade Cheesecake Menu</a>
                  </li>
                  <li>
                    <a href="./">Drink Menus</a>
                  </li>
                  <li>
                    <a href="./">Banquet Halls & Private Parties</a>
                  </li>
                  <li>
                    <a href="./">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-details mt-3">
          <div>&copy; Embers of the Phoenix 2022</div>
          <div>
            Built and maintained by{" "}
            <a
              href="https://www.linkedin.com/in/ameliaarku/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Connect with Amelia Arku on LinkedIn"
            >
              Amelia Arku
            </a>
          </div>
        </div>
      </footer>
      <div id="divider-7"></div>
    </div>
  );
}
