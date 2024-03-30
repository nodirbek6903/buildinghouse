import React from "react";
import "./Contact.css";
import ContactImg from "../../images/contact-img.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-img-container">
      <form action="" className="contact-form">
        <h1 className="form-title">
          Do you have any questions, suggestions or requests?
        </h1>
        <input type="text" placeholder="Name" className="form-input" />
        <input
          type="text"
          placeholder="Your phone number"
          className="form-input"
        />
        <textarea
          className="form-textarea"
          placeholder="Your message ..."
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <a href="#" className="form-sending">
          Sending
        </a>
      </form>
      <div className="form-img">
        <img src={ContactImg} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Contact;