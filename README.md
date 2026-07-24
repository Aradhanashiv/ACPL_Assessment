# ACPL Systems - Managed Detection & Response (MDR) Landing Page

A full-stack MERN application developed as an assessment project for **ACPL Systems**. The project showcases a production-ready Managed Detection & Response (MDR) landing page with dynamic content fetched from a Node.js backend and MongoDB database.

---

##  Features

- Modern responsive UI built with React.js & Tailwind CSS
- Hero, Services, Features, Methodology, Partners, FAQ, Contact sections
- Dynamic Services and FAQ fetched from MongoDB
- Contact form with backend API integration
- RESTful APIs built using Express.js
- MongoDB database using Mongoose
- Deployed Frontend on Vercel
- Deployed Backend on Render

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Lucide React Icons
- Vite

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv

---

# Project Structure

```
acpl-assessment/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── contactController.js
│   │   ├── serviceController.js
│   │   └── faqController.js
│   │
│   ├── models/
│   │   ├── Contact.js
│   │   ├── Service.js
│   │   └── FAQ.js
│   │
│   ├── routes/
│   │   ├── contact.js
│   │   ├── Service.js
│   │   └── faq.js
│   │
│   ├── seed/
│   │   ├── seedServices.js
│   │   └── seedFaqs.js
│   │
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>

cd acpl-assessment
```

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Run backend

```bash
npm run dev
```

or

```bash
npm start
```

---

# Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

For Local Development

```env
VITE_API_URL=http://localhost:5000
```

For Production

```env
VITE_API_URL=https://your-render-backend.onrender.com
```

Run frontend

```bash
npm run dev
```

---

# Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

## Frontend (.env)

Local

```env
VITE_API_URL=http://localhost:5000
```

Production

```env
VITE_API_URL=https://your-render-backend.onrender.com
```

---

# API Endpoints

## Services

```
GET /services
```

Returns all MDR services.

---

## FAQ

```
GET /faq
```

Returns all FAQ records.

---

## Contact

```
POST /contact
```

Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Pvt Ltd",
  "phone": "9876543210",
  "message": "Need MDR consultation"
}
```

---

# Database Seeding

To seed Services

```bash
node seed/seedServices.js
```

To seed FAQ

```bash
node seed/seedFaqs.js
```

---

# Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- MongoDB Atlas

---

# Author

**Aradhana Shivhare**

MERN Stack Developer
