import "../css/Contact.css";
import CombinedTextBox from './textbox';  

export default function Contact() {
  return (
    <div>
      <header className="contactHead">Contact Form</header>
      <div>
            <CombinedTextBox />
        </div>
      <p>
       Please allow up to 1 business day for me to get back to you.
      </p>
    </div>
  );
}
