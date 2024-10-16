// import React from 'react';

// const aboutMe = () => {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>This is the contact page content.</p>
//     </div>
//   );
// };

// export default ContactPage;


import { useState } from "react";

export default function FormElement() {
  const [subject, setSubject] = useState<string>("");
  const [message, setEmail] = useState<string>("");

  const [user, setUser] = useState<User>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "subject") {
      setSubject(inputValue);
    }
    if (inputType === "message") {
      setEmail(inputValue);
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!subject || !message) {
      alert("Please fill out all fields.");
      return;
    }
    const newUser = { subject, message};
    setUser(newUser);

    setSubject("");
    setEmail("")
  }


  return (
    <>
      <div classsubject="container">
        <h1>Contact</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              onChange={handleInputChange}
              value={subject}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input
              type="message"
              id="message"
              onChange={handleInputChange}
              value={message}
            />
          </div>
          <div>
            <input type="submit" id="submit" />
          </div>
        </form>
      </div>
      <div classsubject="lastUser">
      {user && showPassword (
          <div>
            <h2>Last Submitted User Details:</h2>
            <p>subject: {user.subject}</p>
            <p>Email: {user.message}</p>
          </div>
        )}
        {user && !showPassword && (
          <div>
            <h2>Last Submitted User Details:</h2>
            <p>subject: {user.subject}</p>
            <p>Email: {user.message}</p>
          </div>
        )}
      </div>
    </>
  );
}
