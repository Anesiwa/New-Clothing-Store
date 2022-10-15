import React from "react";
import "./contact-section/form.css";
import Pic2 from "./images/wineDinnerCover.png";

const formInputs = [
  { id: "name", type: "text", label: "Your name", placeholder: "John Doe" },
  {
    id: "tel",
    type: "tel",
    label: "Phone number",
    placeholder: "+1 563 323 2345",
  },
  {
    id: "email",
    type: "email",
    label: "Email address",
    placeholder: "you@example.com",
  },
];

export default function WineDinner() {
  return (
    <div className="wineDinner container">
      <h1 className="text-center">Phoenix Wine Dinners</h1>
      <img className="img-fluid rounded" src={Pic2} alt="Wine Dinner Photo" />
      <br />
      <p className="text-center">
        Add your name to our mailing list and be first to sign up for the next
        dinner. Seats typically in less than one day, so when you recieve the
        notification to sign up, do so IMMEDIATELY to secure a spot!
      </p>
      <br />
      <div className="justify-content-center">
        <form className="wineDinnerSignup">
          {formInputs.map((input) => (
            <label key={input.label} id={input.id} className="form-label">
              {input.label}

              {input.type === "textarea" ? (
                <textarea
                  className="form-textarea"
                  placeholder={input.placeholder}
                />
              ) : (
                <input
                  className="form-input"
                  type={input.type}
                  placeholder={input.placeholder}
                />
              )}
            </label>
          ))}
          <a href="./winedinner" className="btn btn-danger btn-lrg mb-4">
            Get on the list!
          </a>
        </form>
      </div>
    </div>
  );
}
