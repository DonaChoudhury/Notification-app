const express = require('express');
const Pusher = require('pusher');
const path = require('path');
const nodemailer = require('nodemailer');//email
const app = express();
app.use(express.json());

const pusher = new Pusher({
  appId: "1993980",
  key: "4a6b439a7e92f052c822",
  secret: "d2daac77d7df1ce14300",
  cluster: "ap2",
  useTLS: true,
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/notifications', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notifications.html'));
});


app.post('/send-notification', async (req, res) => {
  const { message, recipient } = req.body;
  try {
    await pusher.trigger('notifications', 'new-message', {
      message,
      recipient,
    });
    console.log('Notification sent');
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Pusher trigger failed:', err);
    res.status(500).json({ success: false });
  }
});

// to send email
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "donaaaait1@gmail.com", // Your email address
        pass: "lmdyggxqdtojfkln", // Your email app password
    },
});

// Endpoint to send an email when visiting /send-email
// app.get('/send-email', async (requestAnimationFrame, res) => {
//     try {
//         // Send email
//         const info = await transporter.sendMail({
//             from: '"Dona Choudhury" <donaaaait1@gmail.com>', // Sender address
//             to: "puchuit@gmail.com", // Recipient email
//             subject: "Hello from Node.js", // Subject line
//             text: "This is a test email sent from Node.js!", // Plain text body
//         });

//         console.log(`Message sent: ${info.messageId}`);
//         res.send('Email sent successfully!');
//     } catch (error) {
//         console.error(`Error sending email: ${error.message}`);
//         res.status(500).send('Failed to send email.');
//     }
// });

//
app.post('/send-email', async (req, res) => {
  const { senderEmail, receiverEmail ,subject, text } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Notification App" <${senderEmail}>`,
      to: receiverEmail,
      subject: subject || "Hello from Node.js", // ✅ UPDATED
      text: text || "This is a test email sent from Node.js!",     // ✅ UPDATED
    });

    console.log(`Message sent: ${info.messageId}`);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
    res.status(500).send('Failed to send email.');
  }
});



app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
