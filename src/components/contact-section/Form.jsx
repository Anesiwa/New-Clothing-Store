import React from "react";
import "./form.css";

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
  {
    id: "message",
    type: "textarea",
    label: "Your message",
    placeholder: "How can we help you? Or you us?",
  },
];

export default function Form() {
  return (
    <div>
      <form className="form">
        <h2 className="form-h2">Send us a message</h2>

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

        {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
      </form>
    </div>
  );
}
