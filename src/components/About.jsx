import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="font-weight-light text-center">About Us</h1>
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <div>
              <h3>Our Building</h3>
              <p className="building-description-1">
                The Bix Biederbecke building is a four story structure built in
                1912 and has been designed with an element of contemporary flair
                and old fashioned elegance. Exposed brick and original tin
                relief ceiling compliment our wood and stone set flooring.
              </p>
            </div>
          </div>
          <div>
            <p>
              The 12th century German stencil work, original to the building
              above our entry level bar, was restored in 2002 during an
              extensive remodeling. Previously our building housed Abram’s
              clothing store until 1970.
            </p>
          </div>
          <div>
            <p>
              Beginning in 2002 our building was home to Savitri’s Fine Dining
              before evolving into The Phoenix. We have a parking ramp
              conveniently located behind our building and you can enter the
              ramp on Brady Street or Main Street. You can then walk from the
              ramp through the courtyard that is adjacent to our building.
            </p>
          </div>
        </div>
        <h2 className="text-center">Specials</h2>
        <section className="text-center about-section">
          <div className="specials-sections">
            <h3>Chef Justin's Weekly Specials</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              aperiam provident tempora? Cumque adipisci, non dolorem quia, odit
              qui alias veniam excepturi rem dolor fugit dignissimos, sed
              voluptatum blanditiis harum.
            </p>
          </div>
          <div className="row">
            <div className="col-6">
              <h3>Happy Hour</h3>{" "}
              <ul>
                <li className="hh-header">
                  <strong>Tuesday - Saturday</strong>
                </li>
                <li> 3pm to 6pm & 9pm to 11pm</li>
                <li className="mb-2">
                  <strong>Mondays - All Day!</strong>
                </li>
                <div
                  style={{
                    borderTop: "2px solid #dc3545 ",
                    marginLeft: 100,
                    marginRight: 100,
                  }}
                ></div>
                <li className="mt-2">$7.00 Signature Martinis</li>
                <li> $1 off Draft Pints</li>
                <li> $3 Well Cocktails</li>
                <li>$3 Domestic Bottles</li>
                <li> $2 off Wine By The Glass</li>
                <li> $2 off Appetizers (Not on Saturday Nights)</li>
              </ul>
            </div>
            <div className="col-6">
              <h3>Rotating Cocktail Menu</h3>{" "}
              <p className="mt-3 cocktail-menu-description">
                Looking for something a bit different for a drink tonight? Look
                no further than the ever-changing cocktail menu at the Phoenix!
                Our skilled mixologists are always evolving our rotating drink
                menu based on the season and the taste of our guests. Come try
                our award winning Smoking Jacket or Monster Cookie martini
                tonight!
              </p>
            </div>
          </div>
          <div>
            <h3>Dinner for Two - $65</h3>
            <ul>
              <li>Monday thru Thursday</li>
              <li>Includes:</li>
              <li>Two drinks</li>
              <li>Two soups or salads</li>
              <li>Choice of Two Entrees*</li>
              <li>*Add $5 for Ribeye or NY Strip, $8 for Filet</li>
              <li>
                For more details click <a href="./specialevents">here</a>
              </li>
            </ul>
          </div>
          <div>
            To make a reservation, please call us today at (563) 323-2345
          </div>
          <div className="coupon-disclaimer">
            <strong>
              No Coupons or Discounts Allowed on Happy Hour or the Dinner for
              Two Promotion
            </strong>
          </div>
        </section>
      </div>
    </div>
  );
}
