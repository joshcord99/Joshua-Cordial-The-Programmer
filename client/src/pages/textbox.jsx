import React, { useState } from "react";

const CombinedTextBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameWarning, setNameWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState("");
  const [messageWarning, setMessageWarning] = useState(false);

  const handleNameChange = (event) => setName(event.target.value);

  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleNameBlur = () => setNameWarning(name.trim() === "");

  const handleEmailBlur = () =>
    setEmailWarning(
      !email.includes("@") || !email.endsWith(".com")
        ? "Error: Please enter a valid email address."
        : ""
    );

  const handleMessageBlur = () => setMessageWarning(message.trim() === "");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameWarning(true);
      return;
    }
    if (!email.includes("@") || !email.endsWith(".com")) {
      setEmailWarning("Error: Please enter a valid email address.");
      return;
    }
    if (message.trim() === "") {
      setMessageWarning(true);
      return;
    }

    const formData = { name, email, message };
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
      alert(
        "An error occurred while sending your message. Please try again later."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        padding: "0 10px",
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="name-input"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Your Name:
        </label>
        <input
          type="text"
          className="text-box"
          id="name-input"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          placeholder="Enter your Full Name"
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "22px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        />
        {nameWarning && (
          <p style={{ color: "red", fontSize: "12px" }}>
            Error: Please enter your Full Name.
          </p>
        )}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="email-input"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Email:
        </label>
        <input
          type="email"
          className="text-box"
          id="email-input"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "22px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        />
        {emailWarning && (
          <p style={{ color: "red", fontSize: "12px" }}>{emailWarning}</p>
        )}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="message-textarea"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Message:
        </label>
        <textarea
          className="text-box"
          id="message-textarea"
          value={message}
          onChange={handleMessageChange}
          onBlur={handleMessageBlur}
          rows="4"
          placeholder="Start Typing..."
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "22px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            resize: "none",
            boxSizing: "border-box",
          }}
        />
        {messageWarning && (
          <p style={{ color: "red", fontSize: "12px" }}>
            Error: Please enter a message.
          </p>
        )}
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "18px",
          fontSize: "22px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          boxSizing: "border-box",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default CombinedTextBox;
