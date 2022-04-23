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
            <section className="building-info">
              <div>
                <h3>Our Building</h3>
                <p className="building-description">
                  The Bix Biederbecke building is a four story structure built
                  in 1912 and has been designed with an element of contemporary
                  flair and old fashioned elegance. Exposed brick and original
                  tin relief ceiling compliment our wood and stone set flooring.
                  The 12th century German stencil work, original to the building
                  above our entry level bar, was restored in 2002 during an
                  extensive remodeling. Previously our building housed Abram’s
                  clothing store until 1970. Beginning in 2002 our building was
                  home to Savitri’s Fine Dining before evolving into The
                  Phoenix. We have a parking ramp conveniently located behind
                  our building and you can enter the ramp on Brady Street or
                  Main Street. You can then walk from the ramp through the
                  courtyard that is adjacent to our building.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
