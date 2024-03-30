import React, { useState } from "react";
import "./Contact.css";
import ContactImg from "../../images/contact-img.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendTelegram = () => {
    const tg_bot_id = "6508105643:AAHzhpmovmZQXqCsdXX8XehXbKmB0lL9KzA";
    const chat_id = -1002026005971;
    const messageBot = `Name: ${firstname} \n Phone number: ${phoneNumber} \n Message: ${message}`;

    fetch(`https://api.telegram.org/bot${tg_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: messageBot,
      }),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendTelegram();
    toast.success(
      `${firstname} malumotlaringiz telegram kanalga muvaffaqqiyatli tarzda yuborildi!!!`,
      {
        position: "top-right",
      }
    );
    setFirstname("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <>
      <ToastContainer position="top-right" />
    <div className="contact-container">
      <div className="form-img-container" id="communication">
        <form action="" onSubmit={handleSubmit} className="contact-form">
          <h1 className="form-title">
            Do you have any questions, suggestions or requests?
          </h1>
          <input
            type="text"
            placeholder="Name"
            value={firstname}
            onChange={handleFirstname}
            className="form-input"
            required
          />
          <input
            type="text"
            placeholder="Your phone number"
            className="form-input"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            required
          />
          <textarea
            className="form-textarea"
            placeholder="Your message ..."
            name=""
            id=""
            value={message}
            onChange={handleMessage}
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className="form-sending">
            Sending
          </button>
        </form>
        <div className="form-img">
          <img src={ContactImg} alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
