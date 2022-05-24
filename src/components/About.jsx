import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About</h1>
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
        <h2>Specials</h2>
        <section>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam aperiam provident tempora? Cumque adipisci, non dolorem
                quia, odit qui alias veniam excepturi rem dolor fugit
                dignissimos, sed voluptatum blanditiis harum.
              </p>
            </div>
            <div className="col-6">
              <h3>Summer Cocktail Menu</h3>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam aperiam provident tempora? Cumque adipisci, non dolorem
                quia, odit qui alias veniam excepturi rem dolor fugit
                dignissimos, sed voluptatum blanditiis harum.
              </p>
            </div>
          </div>
          <div className="specials-sections">
            <h3>Dinner for Two - $65</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              aperiam provident tempora? Cumque adipisci, non dolorem quia, odit
              qui alias veniam excepturi rem dolor fugit dignissimos, sed
              voluptatum blanditiis harum.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
