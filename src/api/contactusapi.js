import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const mail = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;


export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ message: "Please fill in all fields" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: mail,
        pass: password,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: "your-email@gmail.com",
      subject: "New Message from Your Website",
      text: message,
    });

    console.log("Message sent: %s", info.messageId);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
