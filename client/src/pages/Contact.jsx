import "../css/Contact.css";
import CombinedTextBox from './textbox';  

export default function Contact() {
  return (
    <div className="text-center">
      <header className="contactHead">Contact Form</header>
      <div>
            <CombinedTextBox />
        </div>
      <p>
      Thank you for reaching out! I aim to respond to all inquiries within one business day. If the contact form does not work due to hosting issues, feel free to email me directly at joshcord99@gmail.com.
      </p>
    </div>
  );
}
