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
       Please allow up to 1 business day for me to get back to you.
      </p>
    </div>
  );
}
