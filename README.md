# Job Seeking Platform

A user-friendly job seeking platform built with the MERN stack (MongoDB, Express, React, Node.js). This project features secure authentication, resume uploads, and persistent login sessions.

## Features

- Intuitive and responsive design
- Secure authentication and authorization using JSON Web Tokens (JWT)
- Resume uploads with Cloudinary integration
- Persistent login sessions using cookies

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **File Storage:** Cloudinary
- **Session Management:** Cookies

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/job-seeking-platform.git
   cd job-seeking-platform
2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
3. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install

## Configuration
**Create a .env file in the backend directory and add the following environment variables:**
  ```bash
  PORT = 4000
  CLOUDINARY_CLIENT_NAME = your_cloudinary_name
  CLOUDINARY_CLIENT_API = your_cloudinary_api
  CLOUDINARY_CLIENT_SECRET = your_cloudinary_secret
  FRONTEND_URL = forntend_url
  MONGO_URI = mongoDB_connection_string
  JWT_SECRET_KEY = your_jwt_secret_key
  JWT_EXPIRES = "7d"
  COOKIE_EXPIRE = 5
```

## Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
2. **Start the frontend server:**
   ```bash
   cd frontend
   npm run dev

## Usage

1. **Sign up** for a new account.
2. **Log in** with your credentials.
3. **Upload your resume** for the jobs.
4. **Browse and apply** for available jobs.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any feature requests, bug fixes, or enhancements.



