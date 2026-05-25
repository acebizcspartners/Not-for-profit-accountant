// Simple Node.js mailer for contact form
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000; // Change if needed

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Replace these with your details
const EMAIL_USER = 'acebiz.cspartners@gmail.com';
const EMAIL_PASS = 'afaf vgel quki uwvx'; // Replace with your Gmail app password

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

app.post('/send', (req, res) => {
  const { name, phone, org, message } = req.body;
  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_USER,
    subject: 'New NFP Website Enquiry',
    text: `Name & Role: ${name}\nPhone: ${phone}\nOrganisation: ${org}\nMessage: ${message}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error);
    }
    res.send('Success');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
