import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div>
          <img
            className="img-fluid rounded mb-4"
            src="./images/Phoenix logo_w_name.png"
            alt="The Phoenix of Davenport"
          />
        </div>
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
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
          </div>
          <div className="row restaurant-photos">
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
                alt="The Phoenix of Davenport"
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded mb-4"
                src="src/images/logo_w_name.png"
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
          <div className="col-5">
            <h2>Bringing the Feel of Chicago to Downtown Davenport</h2>
          </div>
          <div className="col-7">
            <p>
              Come down and visit our exceptional martini bar and try one our
              signature martinis. Wine lovers will appreciate our robust wine
              list featuring over 35 wines!
            </p>
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
        </section>
        <div
          style={{
            borderTop: "2px solid #dc3545 ",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
        <section className="building-info">
          <div>
            <h3>Our Building</h3>
            <p className="building-description">
              The Bix Biederbecke building is a four story structure built in
              1912 and has been designed with an element of contemporary flair
              and old fashioned elegance.
            </p>
            <a href="./About.jsx" className="btn btn-primary btn-lrg">
              Learn more
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
