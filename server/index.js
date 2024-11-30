import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); 
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;


  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });
    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_USER, 
      subject: `You have been contact by ${name}`,
      text: `
You have received a new message from your website's contact form:
Name: ${name}
Email: ${email}

Message:
${message}
            `,
    };
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send your message. Please try again later." });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});