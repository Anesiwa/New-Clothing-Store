import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";
import scampi from "./menu-photos/scampi_pasta.JPEG";
import peachMarg from "./menu-photos/peach-marg.jpeg";
import cheesecake from "./menu-photos/cheesecake.JPEG";
import martini from "./menu-photos/salted-carmel-martini.jpeg";

function Posts() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/blog/dinnermenu">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={scampi}
                alt="Shrimp Scampi Alfredo"
                width="500"
                height="400"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Dinner Menu</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog/cheesecake">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={cheesecake}
                alt="Homemade Cheesecake"
                width="500"
                height="400"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Homemade Cheesecake Menu</h1>
              <p>
                Home is where the cheesemake is! orem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog/this-is-a-post-title-3">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={martini}
                alt="Salted Carmel Martini"
                width="500"
                height="400"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Handcrafted Martini Menu</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog/this-is-a-post-title-4">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={peachMarg}
                alt="Spicy Peach Margarita"
                width="500"
                height="200"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Cocktails & Drinks</h1>
              <p>
                Starting May 1st, our mixology team will begin crafting our new
                Summer drink menu! We have hand-crafted a new variety of
                cocktail options for all above 21 to enjoy!
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog/this-is-a-post-title-5">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
                width="500"
                height="400"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Wine Menu</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;
