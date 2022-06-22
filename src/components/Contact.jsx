import React from "react";
import ContactSection from "./contact-section/ContactSection";
import "./contact.css";
import "./contact-section/contact-section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5 mb-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
              height="400"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Contact Us</h1>
            <h2>The Phoenix Restaurant & Martini Bar</h2>
            <ul>
              <li>Phone: (563) 323-2345</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:thephoenixofdavenport@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  thephoenixofdavenport@gmail.com
                </a>
              </li>
            </ul>
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
        <div className=" row location-section mt-5 mb-5">
          <div className="col-lg-7">
            <h3>Location</h3>
            <p>111 W. 2nd St Davenport, IA 52803</p>
          </div>
          <div className="col lg-5">
            insert map with Phoenix address pinpointed
          </div>
        </div>
        <br />
        <div className="row text-center">
          <div className="col-sm-6">
            <div>
              <h3>Dinner Hours</h3>
              <div>
                Monday-Thursday 3pm to 9:45pm
                <br />
                Friday & Saturday 3pm to 9:30pm
              </div>
              <div>insert food picture</div>
            </div>
          </div>
          <div className="col-sm-6">
            <h3>Bar Hours</h3>
            <div>
              Monday-Thursday 3pm to 9:30pm
              <br />
              Friday & Saturday 3pm to 11:45pm
            </div>
            <div>insert drink picture</div>
          </div>
        </div>
      </div>
      <br />
      <div className="text-center">
        <h3>Phoenix Staff</h3>
        <div>
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src="http://placehold.it/900x400"
            alt="Phoenix staff"
          />
        </div>
      </div>
      <div className="mt-5 mb-5">
        <ContactSection />
      </div>
    </div>
  );
}
