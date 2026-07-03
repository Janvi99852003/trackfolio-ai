<div align="center">

# 🚀 TrackFolio AI

### AI-Powered Job Application Tracker

Track every application, organize your job search, and instantly evaluate how well your resume matches any job description using Google Gemini AI.

Built with the **MERN Stack** and designed with a modern, responsive UI.

<p>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

</p>

**Manage your applications. Track your progress. Improve your resume with AI.**

🌐 **Live Demo:** Coming Soon  
📄 **Documentation:** Coming Soon

</div>

---

# ✨ Features

## 🔐 Authentication

- Secure JWT Authentication
- Password hashing using bcrypt
- Protected routes
- Persistent login sessions

---

## 📧 Password Recovery

- Forgot Password functionality
- Secure email verification
- One-time password reset tokens
- Token expiration for enhanced security

---

## 📋 Job Application Management

- Create job applications
- Update existing applications
- Delete applications
- Track application status

Supported stages:

- Applied
- Interview
- Offer
- Rejected

---

## 📊 Interactive Dashboard

Monitor your entire job search from one place.

Dashboard includes:

- Total Applications
- Applied Count
- Interviews Scheduled
- Offers Received
- Rejections
- Recent Applications

---

## 🤖 AI Resume Matching

One of the core features of TrackFolio AI.

Simply paste:

- Your Resume
- A Job Description

Google Gemini analyzes both and provides:

- Resume Match Score
- Missing Skills
- Strengths
- Suggestions for Improvement
- ATS-Friendly Feedback

---

## 📱 Responsive UI

Designed for:

- Desktop
- Tablet
- Mobile

Built using Tailwind CSS for a modern and clean interface.

---

# 🛠️ Tech Stack

## Frontend

- React 19
- React Router DOM
- Tailwind CSS
- Axios
- Context API

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Nodemailer

---

## AI

- Google Gemini API

---

## Deployment :- 
LIVE DEMO LINK :- 

Frontend

- Vercel

Backend

- Render

Database

- MongoDB Atlas

---

# 🏗️ System Architecture

```
                    User

                      │
                      │
                      ▼

          React Frontend (Vercel)

                      │
               HTTPS REST API
                      │

                      ▼

         Express + Node Backend
               (Render)

          │               │
          │               │
          ▼               ▼

   MongoDB Atlas      Google Gemini API

 Store Job Data      Resume Matching
 User Accounts       AI Suggestions
 Password Tokens
```

---

# 📂 Project Structure

```
TrackFolio-AI/

│

├── backend/

│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── controllers/
│   ├── server.js
│   └── package.json

│

├── frontend/

│   ├── public/
│   ├── src/

│   │

│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── api/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx

│

├── screenshots/

├── README.md

└── .gitignore
```

---

# 🚀 Getting Started

## Prerequisites

Install:

- Node.js (v18 or above)
- MongoDB Atlas
- Google Gemini API Key
- Gmail App Password

---

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/TrackFolio-AI.git

cd TrackFolio-AI
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create a `.env`

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

GMAIL_USER=your_email@gmail.com

GMAIL_APP_PASSWORD=your_app_password
```

Run backend

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend

```bash
npm run dev
```

Application starts at

```
http://localhost:5173
```

---

# 🔐 Authentication Flow

```
User Signup
      │
      ▼

Password Hashing
   (bcrypt)

      │

      ▼

Save User

      │

      ▼

Login

      │

      ▼

JWT Generated

      │

      ▼

Protected API Requests

      │

      ▼

JWT Middleware Verification

      │

      ▼

Authorized Access
```

---

# 🤖 AI Resume Matching Flow

```
Resume

       +

Job Description

        │

        ▼

Google Gemini API

        │

        ▼

Structured JSON Response

        │

        ▼

Resume Score

Missing Skills

Strengths

Suggestions

        │

        ▼

Saved inside Job Document
```

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Environment Variables
- Protected API Routes
- User-specific Database Queries
- Secure Password Reset
- One-time Reset Tokens
- Token Expiration
- Email Verification
- Sensitive credentials excluded via `.gitignore`

---

# 📊 Database Models

## User

```
User

├── Name
├── Email
├── Password
├── Reset Token
├── Token Expiry
└── Created At
```

---

## Job

```
Job

├── Company
├── Position
├── Status
├── Job Description
├── Resume Match Score
├── Missing Skills
├── Suggestions
├── User ID
└── Created At
```

---

# 💡 Key Highlights

✅ Full MERN Stack Application

✅ AI Resume Analyzer

✅ Secure Authentication

✅ Password Reset via Email

✅ Responsive Design

✅ REST API

✅ MongoDB Atlas Integration

✅ Production Ready Structure

✅ Recruiter-Friendly Dashboard

---

# 📈 Future Improvements

- Resume PDF Upload
- Drag-and-Drop Kanban Board
- Email Notifications
- Calendar Integration
- Interview Reminder System
- Company Notes
- Cover Letter Generator
- Resume Version Tracking
- Dark Mode
- Analytics Dashboard
- Export Applications to CSV/PDF

---

# 📝 Notes

- Render free-tier backend may require 30–60 seconds to wake up after inactivity.
- Gmail SMTP is used for password reset emails.
- Store all secrets in environment variables and never commit them to GitHub.

---

# 👩‍💻 Author

**Janvi Jaiswal**

B.Tech CSE Student | MERN Stack Developer | AI Enthusiast

**GitHub:** https://github.com/Janvi99852003

**LinkedIn:** https://www.linkedin.com/in/janvi-jaiswal-72415b307?utm_source=share_via&utm_content=profile&utm_medium=member_ios

---

# ⭐ Support

If you found this project useful,

⭐ Star the repository

🍴 Fork it

🐛 Report issues

💡 Suggest improvements

---

<div align="center">

### Thank you for visiting TrackFolio AI!

Made with ❤️ using the MERN Stack and Google Gemini AI.

</div>
