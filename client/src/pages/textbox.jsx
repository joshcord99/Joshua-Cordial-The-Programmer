import React, { useState } from "react";
import "../css/Contact.css";

const CombinedTextBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameWarning, setNameWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState("");
  const [messageWarning, setMessageWarning] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleNameBlur = () => setNameWarning(name.trim() === "");
  const handleEmailBlur = () =>
    setEmailWarning(
      !email.includes("@") || !email.endsWith(".com")
        ? "Error: Please enter a valid email address."
        : ""
    );
  const handleMessageBlur = () => setMessageWarning(message.trim() === "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "") return setNameWarning(true);
    if (!email.includes("@") || !email.endsWith(".com"))
      return setEmailWarning("Error: Please enter a valid email address.");
    if (message.trim() === "") return setMessageWarning(true);

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name-input">Your Name:</label>
        <input
          id="name-input"
          type="text"
          className="text-box"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          placeholder="Enter your Full Name"
        />
        {nameWarning && <p className="warning">Error: Please enter your Full Name.</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email-input">Email:</label>
        <input
          id="email-input"
          type="email"
          className="text-box"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          placeholder="Enter your email"
        />
        {emailWarning && <p className="warning">{emailWarning}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message-textarea">Message:</label>
        <textarea
          id="message-textarea"
          className="text-box"
          value={message}
          onChange={handleMessageChange}
          onBlur={handleMessageBlur}
          placeholder="Start Typing..."
          rows="4"
        />
        {messageWarning && <p className="warning">Error: Please enter a message.</p>}
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default CombinedTextBox;
