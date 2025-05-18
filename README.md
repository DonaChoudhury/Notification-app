Links for the Demo Video:-
---https://drive.google.com/file/d/1pUP2uGxFFJwciLcTc5Px6yJk2jPnfNNd/view?usp=drivesdk
---https://drive.google.com/file/d/1p_BWWNMb5fFyhaQzQOsSFGEzl4JAuYe3/view?usp=drivesdk

# 📬 Notification(inApp) & Email Notification App

This is a Node.js (Express) application to send *real-time in-app notifications* via [Pusher](https://pusher.com) and *emails* via [Nodemailer](https://nodemailer.com). It includes a simple front-end interface for input and Bootstrap toast-based notifications.

---

## 🚀 Features

- Real-time notifications using Pusher
- Email sending via Gmail SMTP using Nodemailer
- Frontend form with dual action buttons
- Bootstrap-based UI for notifications
- Two pages to demonstrate multi-user notification delivery

---

## 📁 Project Structure

project/
│
├── public/
│ ├── index.html # Form to send emails and notifications
│ ├── notifications.html # Notification receiver page
│
├── app.js # Express backend logic
└── README.md # Project documentation


---

## ⚙ Setup Instructions

# 1. Clone the Repository

bash
git clone https://github.com/your-username/notification-email-app.git
cd notification-email-app


# 2.Install the dependencies:
bash
npm install express nodemailer pusher


# 3. Run the Application
bash
node app.js
#Server will start on http://localhost:3000


### 🧪How to Use
*Access the Form:*
Open http://localhost:3000/index.html in a browser to:

Enter message, subject, recipient name and email(sender's mail is predefined)


Click "Send Notification" to trigger in-app toast notifications

Click "Send Mail" to send email

*View Real-Time Notifications*
Open these pages in one or more tabs to receive real-time toast messages:

http://localhost:3000/notifications



# 📧 Email Setup (Important)
The app uses Gmail’s SMTP server. Make sure to:

Use a Gmail account

Generate an App Password if 2FA is enabled

Replace these values in app.js:

auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password",
}
⚠donot misuse hardcoded credentials.

# 🔐 Pusher Configuration
Replace the following fields in app.js with your own Pusher credentials:


const pusher = new Pusher({
  appId: "your_app_id",
  key: "your_key",
  secret: "your_secret",
  cluster: "your_cluster",
  useTLS: true
});

Also, update the frontend Pusher key in notifications.html and notifications2.html:

const pusher = new Pusher('your_key', {
  cluster: 'your_cluster'
});

# 🛡 Assumptions & Notes
~ This is a demo app for showcasing basic functionality.

~ Credentials are hardcoded for quick testing only.

~ No database is used.

~ Suitable for local demo or internal tools.

# 🧰 Tech Stack
~ Backend: Node.js, Express

~ Email: Nodemailer (Gmail SMTP)

~ Notifications: Pusher

~ Frontend: HTML, Bootstrap, JavaScript

# 👤 Author
Dona Choudhury
Email: donachoudhury24@gmail.com
