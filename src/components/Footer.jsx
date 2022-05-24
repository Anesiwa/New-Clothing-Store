import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div>
            <div className="row text-left">
              <div className="col-sm-3 text-white">
                <div className="footer-title">Dinner Hours</div>
                <div className="footer-details">
                  Monday-Thursday 3pm to 9:45pm
                  <br />
                  Friday & Saturday 3pm to 9:30pm
                </div>

                <div className="footer-title">Bar Hours</div>
                <div className="footer-details">
                  Monday-Thursday 3pm to 9:30pm
                  <br />
                  Friday & Saturday 3pm to 11:45pm
                </div>
              </div>
              <div className="col-sm-3 text-white">
                <div className="footer-title">Location</div>
                <div className="footer-details">
                  111 W 2nd St.
                  <br />
                  Davenport, IA 52801
                </div>
              </div>
              <div className="col-sm-3 text-white">
                <div className="footer-title">Contact</div>
                <div className="footer-details">
                  Embers of the Phoenix Restaurant & Martini Bar
                  <br />
                  Phone: (563) 323-2345
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:thephoenixofdavenport@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    thephoenixofdavenport@gmail.com
                  </a>
                </div>
              </div>
              <div className="col-sm-3 text-white">
                <div className="footer-title">Sitemap</div>
                <div>
                  <ul className="Sitemap">
                    <li>
                      <a href="./">Home</a>
                    </li>
                    <li>
                      <a href="./">About</a>
                    </li>
                    <li>
                      <a href="./">Dinner Menus</a>
                    </li>
                    <li>
                      <a href="./">Homemade Cheesecake Menu</a>
                    </li>
                    <li>
                      <a href="./">Handcrafted Martini Menu</a>
                    </li>
                    <li>
                      <a href="./">Summer Cocktails & Drinks</a>
                    </li>
                    <li>
                      <a href="./">Wine Menu</a>
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

          <p className="text-white footer-main-info mt-3 mb-3">
            The Phoenix in Davenport, Iowa has an extensive, mouth watering menu
            to satisfy your most curious appetite. We offer banquets, fine
            dining, an extraordinary martini selection, and a very extensive
            wine list for your pleasure
          </p>
          <div className="copyright-details mt-3">
            <div>Copyright &copy; Embers of the Phoenix 2022</div>
            <div>Built and maintained by Amelia Arku</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
