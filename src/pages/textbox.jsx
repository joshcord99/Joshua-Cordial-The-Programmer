import React, { useState } from 'react';

const CombinedTextBox = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState(''); 
    const [nameWarning, setNameWarning] = useState(false);
    const [emailWarning, setEmailWarning] = useState('');
    const [messageWarning, setMessageWarning] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
    const handleNameBlur = () => {
        if (name.trim() === '') {
            setNameWarning(true);
        } else {
            setNameWarning(false);
        }
    };
    const handleEmailBlur = () => {
        if (!email.includes('@') || !email.endsWith('.com')) {
            setEmailWarning(' Error: Please enter a valid email address.');
        } else {
            setEmailWarning('');
        }
    };
    const handleMessageBlur = () => {
        if (message.trim() === '') {
            setMessageWarning(true);
        } else {
            setMessageWarning(false);
        }
    };
    const handleSubmit = () => {
        window.location.href = '';
    };
    return (
        <div>
            <div>
                <div htmlFor="name-input">Your Name:</div>
                <input
                    type="text"
                    className= "text-box"
                    id="name-input"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    placeholder="Enter your Full Name"
                />
                {nameWarning && <p style={{ color: 'red' }}>Error: Please enter your Full Name.</p>}
            </div>
            <div>
                <div htmlFor="email-input">Email:</div>
                <input
                    type="email"
                    className= "text-box"
                    id="email-input"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}  
                    placeholder="Enter your email"
                />
                {emailWarning && <p style={{ color: 'red' }}>{emailWarning}</p>}
            </div>
            <div>
                <div htmlFor="message-textarea">Message:</div>
                <textarea
                       className= "text-box"
                    id="message-textarea"
                    value={message}
                    
                    onChange={handleMessageChange}
                    onBlur={handleMessageBlur}
                    rows="4"
                    placeholder="Start Typing..."
                />
                {messageWarning && <p style={{ color: 'red' }}>Erorr: Please enter a message.</p>}
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default CombinedTextBox;
