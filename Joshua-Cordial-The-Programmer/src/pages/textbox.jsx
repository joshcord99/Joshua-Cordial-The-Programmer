import React, { useState } from 'react';

const CombinedTextBox = () => {
    const [name, setName] = useState(''); // State for the name input
    const [email, setEmail] = useState(''); // State for the email input
    const [message, setMessage] = useState(''); // State for the message textarea

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = () => {
        window.location.href = 'https://www.google.com';
    };

    return (
        <div>
            <div>
                <label htmlFor="name-input">Your Name:</label>
                <input
                    type="text"
                    id="name-input"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Start Typing..."
                />
            </div>

            <div>
                <label htmlFor="email-input">Email:</label>
                <input
                    type="email"
                    id="email-input"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email..."
                />
            </div>

            <div>
                <label htmlFor="message-textarea">Message:</label>
                <textarea
                    id="message-textarea"
                    value={message}
                    onChange={handleMessageChange}
                    rows="4"
                    placeholder="Start Typing..."
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default CombinedTextBox;
