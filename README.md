<div align="center">

# 📌 TrackFolio AI

### AI-Powered Job Application Tracker with Resume-JD Fit Scoring

A full-stack MERN application that helps job seekers manage their entire application pipeline while leveraging AI to analyze how well their resume aligns with specific job descriptions.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://trackfolio-ai.vercel.app/)
[![Backend API](https://img.shields.io/badge/Backend-API-blue)](https://trackfolio-backend-o7rm.onrender.com)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**[Live Demo](https://trackfolio-ai.vercel.app/) · [Backend API](https://trackfolio-backend-o7rm.onrender.com) · [Report Bug](https://github.com/Janvi99852003/Trackfolio/issues)**

</div>

---

## 📖 Overview

TrackFolio AI was built to solve a real problem faced by every job seeker: keeping track of dozens of applications across different stages, while having no easy way to know if a resume is actually a good match for a given job description before applying.

The platform combines a complete job-tracking pipeline with **Google Gemini API-powered resume analysis**, giving users an AI-generated fit score and actionable feedback for every job they're considering — helping them prioritize applications that are worth the effort instead of applying blindly.

Built with production-grade practices: JWT authentication, bcrypt password hashing, email-based password recovery, and a clean RESTful API architecture connecting a React frontend to an Express/MongoDB backend.

---

## 🔗 Live Links

| Resource | Link |
|---|---|
| 🌐 Frontend (Live App) | [https://trackfolio-ai.vercel.app/](https://trackfolio-ai.vercel.app/) |
| ⚙️ Backend API | [https://trackfolio-backend-o7rm.onrender.com](https://trackfolio-backend-o7rm.onrender.com) |
| 💻 Source Code | [https://github.com/Janvi99852003/Trackfolio](https://github.com/Janvi99852003/Trackfolio) |

> **Note:** The backend is hosted on Render's free tier, so the first request after inactivity may take 30–50 seconds to spin up (cold start). Subsequent requests will be fast.

---

## ✨ Key Features

### 📋 Job Application Management
- Add, edit, and delete job applications with full details (company, role, status, link, notes)
- Track applications across pipeline stages: **Applied → Interview → Offer → Rejected**
- Clean, card-based dashboard view of all applications at a glance

### 🤖 AI-Powered Resume Fit Scoring
- Paste a job description and get an instant AI-generated compatibility score against your resume
- Powered by **Google Gemini API** for natural language understanding
- Returns actionable feedback highlighting skill gaps and alignment strengths

### 🔐 Secure Authentication
- JWT-based stateless authentication
- Passwords hashed with **bcrypt** before storage — plaintext passwords are never stored or logged
- Protected routes with middleware-based token verification

### 📧 Password Recovery
- Full forgot-password → email link → reset-password flow
- Emails sent via **Nodemailer**
- Reset tokens are time-limited and single-use for security

### 📱 Responsive Design
- Fully responsive UI built with **React** and **Tailwind CSS**
- Consistent experience across desktop, tablet, and mobile

---

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="33%">

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Router

</td>
<td valign="top" width="33%">

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- JWT
- bcrypt
- Nodemailer

</td>
<td valign="top" width="33%">

**AI & Deployment**
- Google Gemini API
- Vercel (Frontend)
- Render (Backend)
- Git / GitHub

</td>
</tr>
</table>

---

## 📸 Screenshots

<div align="center">

### Dashboard View
Track all your job applications in one clean, organized view

![Dashboard Screenshot](./screenshots/Screenshot%202026-07-04%20112921.png)

<br>

### Application Details & Status Tracking
Manage individual applications, edit details, and update pipeline status

![Application Details Screenshot](./screenshots/Screenshot%202026-07-04%20113434.png)

<br>

### AI-Powered Resume Fit Analysis
Get instant AI feedback on resume-job description alignment

![AI Fit Score Screenshot](./screenshots/Screenshot%202026-07-04%20113451.png)

</div>

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites

Make sure you have the following installed/available before setup:
- **Node.js** v18 or higher
- **npm** (comes with Node.js)
- A **MongoDB Atlas** account (free tier works)
- A **Google Gemini API key** ([Get one here](https://ai.google.dev/))
- A **Gmail account** with an App Password enabled (for Nodemailer)

### 1. Clone the Repository

```bash
git clone https://github.com/Janvi99852003/Trackfolio.git
cd Trackfolio
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder with the following variables:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:5173
PORT=5000
```

Start the backend server:

```bash
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

### 4. You're all set! 🎉

Open `http://localhost:5173` in your browser, sign up for an account, and start tracking your job applications.

---

## 📁 Project Structure

```
Trackfolio/
├── backend/
│   ├── middleware/       # Auth middleware, error handlers
│   ├── models/           # Mongoose schemas (User, Job)
│   ├── routes/           # API route definitions
│   ├── utils/
│   │   └── mailer.js     # Nodemailer email logic
│   ├── .env               # Environment variables (not committed)
│   ├── server.js          # Express app entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/            # Axios instance & API calls
│   │   ├── components/     # Reusable UI components (JobCard, AddJobModal, etc.)
│   │   ├── pages/           # Route-level pages (Dashboard, Login, Signup, etc.)
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
├── screenshots/            # App screenshots used in this README
├── .gitignore
└── README.md
```

---

## 🔌 API Overview

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/auth/signup` | Register a new user | No |
| POST | `/api/auth/login` | Log in and receive JWT | No |
| POST | `/api/auth/forgot-password` | Request password reset email | No |
| POST | `/api/auth/reset-password/:token` | Reset password using token | No |
| GET | `/api/jobs` | Get all jobs for logged-in user | Yes |
| POST | `/api/jobs` | Create a new job application | Yes |
| PUT | `/api/jobs/:id` | Update a job application | Yes |
| DELETE | `/api/jobs/:id` | Delete a job application | Yes |
| POST | `/api/jobs/analyze` | Get AI fit score for resume vs. job description | Yes |

---

## 🔒 Security Practices

- **Password Hashing:** All passwords are hashed using bcrypt before being stored — plaintext passwords never touch the database
- **JWT Authentication:** Stateless token-based auth protects all sensitive routes via middleware
- **Environment Variables:** All secrets (DB URI, JWT secret, API keys, email credentials) are stored in `.env` and excluded from version control via `.gitignore`
- **Time-Limited Reset Tokens:** Password reset tokens expire after a set period and can only be used once
- **Input Validation:** Backend routes validate incoming data before processing

---

## 🗺️ Roadmap

- [ ] Add analytics dashboard (application success rate, response time trends)
- [ ] Add resume file upload (PDF parsing) instead of manual paste
- [ ] Add email reminders for follow-ups
- [ ] Add dark/light theme toggle
- [ ] Add unit and integration tests

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome. Feel free to open an issue or fork the repo.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Janvi Jaiswal**

B.Tech CSE Student | Full-Stack & AI Developer

- 💻 GitHub: [@Janvi99852003](https://github.com/Janvi99852003)
- 💼 LinkedIn: [Janvi Jaiswal](https://www.linkedin.com/in/janvi-jaiswal-72415b307/)

---

<div align="center">

If you found this project interesting, consider giving it a ⭐ on GitHub!

</div>