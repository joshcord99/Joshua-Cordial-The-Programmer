import "../css/Contact.css";
import CombinedTextBox from './textbox';  


export default function Contact() {
  return (
    <div>
      <h1 className="contactHead">Contact Form</h1>
      <div>
            <CombinedTextBox />
        </div>
      <p>
       Please allow up to 1 business day for me to get back to you.
      </p>
    </div>
  );
}
