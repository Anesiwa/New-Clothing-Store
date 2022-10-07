import React from "react";
import "./Home.css";
import Hero from "./Hero";
import Pic1 from "./images/ribeye.JPG";
import Pic2 from "./images/wineDinnerCover.png";
import Pic3 from "./images/cheesecake.JPEG";
import Pic4 from "./images/saltedCarmelMartini.jpeg";
import Pic5 from "./images/scampi_pasta.JPEG";
import Pic6 from "./images/pizza.JPEG";
import Pic7 from "./images/martini_glass_2.JPEG";
import Pic8 from "./images/joel_gott.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Hero />
        <div className="restaurant-synopsis text-center mt-5 mb-5">
          <h1 className="mb-3">
            We specialize in robust, gourmet food with an extensive wine and
            martini list.
          </h1>
          <p>
            Our dessert menu consists of Chef's homemade cheesecakes and
            occasional chef specialty desserts. Our restaurant offers fine
            dining with a downtown Chicago flare. Plus, we offer a complimentary
            slice of cheesecake for birthdays and anniversaries!
          </p>
        </div>
        <div className="rotating-homepage-photos">
          <div className="row restaurant-photos">
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src={Pic1}
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src={Pic7}
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src={Pic3}
                alt="The Phoenix of Davenport"
              />
            </div>
          </div>
          <div className="row restaurant-photos">
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src={Pic4}
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src={Pic5}
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src={Pic8}
                alt="The Phoenix of Davenport"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "2px solid #dc3545 ",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
        <div className="row phoenix-synopsis">
          <div className="col-5 d-flex">
            <h2>Bringing the Feel of Chicago to Downtown Davenport</h2>
          </div>
          <div className="col-7 text-center">
            <p className="text-center">
              Wine lovers will appreciate our robust wine list featuring over 35
              wines!
            </p>
            <a href="./winedinner" className="btn btn-danger btn-lrg mb-4">
              Sign up for our famous Wine Dinners!
            </a>
            <img className="img-fluid rounded" src={Pic2} alt="Wine Dinner" />
          </div>
        </div>
        <div
          style={{
            borderTop: "2px solid #dc3545 ",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>

        <section className="happy-hour mt-5 mb-5">
          <p className="text-center">
            Come down and visit our exceptional bar and try one our signature
            martinis{" "}
          </p>
          <div className="row">
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
          </div>
          <h3 className="text-center mt-3 mb-3">Happy Hour!</h3>
          <div className="row">
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-2">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
          </div>
          <p className="text-center">
            Happy Hour runs Monday-Saturday from 3-6 p.m. and 9-11 p.m. and
            features daily drink specials. Enjoy Happy Hour All Day on Mondays!
          </p>
        </section>
        <div
          style={{
            borderTop: "2px solid #dc3545 ",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
        <section className="building-info text-center">
          <div>
            <h3>Our Building</h3>
            <p className="building-description">
              The Bix Biederbecke building is a four story structure built in
              1912 and has been designed with an element of contemporary flair
              and old fashioned elegance.
            </p>
            <a href="./About" className="btn btn-danger btn-lrg">
              Learn more about our History
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
