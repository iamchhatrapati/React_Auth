# React-Login-Signup-Authentication
Mern Login and Register authentication
# 🔐 React Login & Signup Authentication

A simple and functional **MERN stack** authentication system with user **registration**, **login**, and **logout** features. It uses **React** on the frontend and **Node.js/Express** with **MongoDB** on the backend.

---

## 🚀 Tech Stack

- **Frontend**: React, React Router, Axios  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (MongoDB Atlas)  
- **Styling**: CSS Modules  
- **Tools**: React Toastify, Axios

---

## ✨ Features

- 🔐 User registration with form validation
- 🔑 Login with email and password
- 🛡️ Protected profile page for logged-in users
- 🚪 Logout functionality
- 📢 Toast notifications for success/error
- ❌ Client-side form validation and error handling

---

## 📁 Folder Structure
React_Auth/
├── client/                  # React frontend
│   ├── public/              # Static files
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable components
│   │   │   ├── Login/       # Login component
│   │   │   │   ├── Login.js
│   │   │   │   └── Login.module.css
│   │   │   ├── Register/    # Registration component
│   │   │   │   ├── Register.js
│   │   │   │   └── Register.module.css
│   │   │   └── Profile/     # User profile component
│   │   │       ├── Profile.js
│   │   │       └── Profile.module.css
│   │   ├── App.js           # Main application component
│   │   ├── index.js         # Entry point for the React app
│   │   └── ...              # Other files and folders
│   └── package.json         # Project dependencies
├── server/                  # Backend server
│   ├── config/              # Configuration files
│   │   └── db.js            # MongoDB connection
│   ├── controllers/         # Controller functions
│   │   └── authController.js
│   ├── middleware/          # Middleware functions
│   │   └── auth.js          # Authentication middleware
│   ├── models/              # Mongoose models
│   │   └── User.js          # User schema
│   ├── routes/              # API routes
│   │   └── auth.js          # Authentication routes
│   ├── server.js            # Main server file
│   └── package.json         # Project dependencies
└── README.md                # Project documentation




## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or local MongoDB)
- VS Code or any code editor

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/React_Auth.git
cd React_Auth


 #Install server dependencies
 npm install

 #Configure your MongoDB Atlas URI:
mongoose.connect("mongodb+srv://<your_connection_string>", {...})

#Start the backend server:
node server.js
It will start on: http://localhost:8000

#Frontend Setup (React.js)

npm install
npm start
The app runs on: http://localhost:3000









