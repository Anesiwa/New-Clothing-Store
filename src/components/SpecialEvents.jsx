import React from "react";
import wineDinner from "./images/wineDinnerCover.png";
import Russ from "./images/russReyman.png";
import "./SpecialEvents.css";

export default function SpecialEvents() {
  return (
    <div className="container">
      <div className="Special-Events">
        <h1 className="text-center">Special Events</h1>
        <br />
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={Russ}
              alt="Russ Reyman on the Keys"
              width="400"
              height="280"
            />
          </div>
          <div className="col-lg-7">
            <h2 className="font-weight-light">Russ Reyman on the Keys</h2>
            <p>
              Russ Reyman has been recognized as one of the areas premier solo
              pianists and performers. Comfortable in a wide range of styles,
              Russ has performed or toured as pianist, vocalist, and / or
              conductor with many performers including: John Davidson, Engelbert
              Humperdink, John Gary, Vic Damone, (In Vegas), Johnny Carson Show,
              Don Rickles, John Denver, Liberace, Red Buttons, and others. Russ
              toured on Broadway with Sammy Davis, Jr. as pianist and vocal
              coach in "Stop the World I Want to Get Off.
            </p>
          </div>
          <div className="align-items-center p-3">
            <p>
              In 1995, Russ performed for President Clinton's $1500 a plate
              dinner at the Ritz Carlton Hotel in Chicago. Starting his career
              in his father's big band at 13, Russ went on to play in many big
              bands including: Nelson Riddle Orchestra, Russ Morgan Orchestra,
              Louis Bellson, and others. Russ Reyman has been a life-long music
              educator, performer, pianist, vocalist, arranger, and composer. He
              was educated in piano and voice at University of Iowa with
              master's studies at DePaul University.
            </p>

            <p>
              He currently teaches beginners to professionals privately at
              Griggs Music Conservatory in Davenport, Iowa, specializing in
              vocal technique and performance instruction (classical, broadway,
              and jazz styles) and piano instruction (classical, jazz, theory,
              and improvisation).
            </p>
          </div>
          <h3>To contact Russ - Phone: 563-340-5399</h3>
          <br />
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <h2 className="font-weight-light">
                Phoenix Wine Pairing Dinners
              </h2>
              <div>
                <p>
                  We have an expert kitchen and service staff that prepare a
                  five-course Wine Pairing Dinner in a relaxed setting on a
                  bi-monthly basis. These fabulous events feature salads, soups,
                  appetizers, a main course, and dessert, all paired with
                  accommodating wine choices.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="p-3">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={wineDinner}
                  alt="Wine Dinner"
                  width="400"
                  height="280"
                />
              </div>
            </div>
            <div className="wine-dinner-contact mt-3">
              <div className="p-3">
                <a href="./winedinner" className="btn btn-danger btn-lrg mb-4">
                  Sign up here
                </a>
                <p className="text-center mb-0 pb-0">
                  For more information, or to make a reservation,
                </p>
                <h3>
                  contact Claudia at:{" "}
                  <a
                    href="mailto:claudiaanderson2424@yahoo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="email-link"
                  >
                    claudiaanderson2424@yahoo.com
                  </a>
                </h3>
              </div>
              <br />
              <div className="row align-items-center my-5">
                <div className="col-lg-5">
                  <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={Russ}
                    alt="Russ Reyman on the Keys"
                    width="400"
                    height="280"
                  />
                </div>
                <div className="col-lg-7" id="Dinner42">
                  <h2 className="font-weight-light">Dinner for Two Special</h2>
                  <p>
                    Monday through Thursday, let us do the work with a set menu
                    that includes everything but dessert for only $65!
                  </p>
                  <p>
                    Dinner includes:
                    <ul>
                      <li>
                        Two Drinks (wine, beer, well, or Signature Martini)
                      </li>
                      <li>Two salads: house, cranberry walnut, or Caesar</li>
                      <li>
                        Choice of two entrees (Add $5 for Ribeye, $8 for Filet)
                      </li>
                      <li>No Coupons or Discounts Allowed</li>
                    </ul>
                  </p>
                </div>
              </div>
              <h3>
                Reservations are always accepted & preferred on Friday &
                Saturday nights
              </h3>

              <h3 className="mt-2">563-323-2345</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
