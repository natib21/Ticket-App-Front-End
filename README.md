# MERN Ticket System

This is a **MERN stack** ticketing system built for job purposes. It includes **user authentication, ticket management, and role-based access control**. The system allows users to create, track, and manage support tickets efficiently.

## 🚀 Tech Stack

### Backend:
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT Authentication**
- **Bcrypt for password hashing**

### Frontend:
- **React.js**
- **React Hook Form** for form handling
- **React Router** for navigation
- **Tailwind CSS** for styling

## 🔥 Features
- **User Authentication** (Login/Sign up with JWT)
- **Role-based Access Control** (Admin, agent, customer)
- **CRUD Operations** for Tickets
- **Status Updates** (Open, In Progress, Closed)
- **Assigned Tickets** to Support Staff
- **Secure API with JWT Authorization**

## 📂 Project Structure
```
mern-ticket-system/
│-- server/  (Express.js API)
│   ├── models/   (Mongoose Schemas)
│   ├── routes/   (API Endpoints)
│   ├── controllers/ (Business Logic)
│   ├── middleware/  (JWT & Auth Middleware)
│   ├── config/  (Database Connection)
│-- client/ (React.js Application)
│   ├── components/  (Reusable UI Components)
│   ├── pages/  (Dashboard, Login, Tickets, etc.)
│   ├── hooks/  (Custom Hooks)
│   ├── context/  (Global State Management)
│   ├── services/  (API Calls)
```

## ⚡ Installation & Setup

### 1️⃣ Backend Setup
```sh
cd server
npm install
npm start
```
**Environment Variables:**
Create a `.env` file in the backend folder and add:
```env
MONGO_URI=mongodb+srv://nathnaelzelalem:wAJGdngUWsS2Va9Z@ticket.x8qir.mongodb.net/?retryWrites=true&w=majority&appName=ticket
JWT_SECRET=this-is-ticket-mgmt-system
PORT=8000
```

### 2️⃣ Frontend Setup
```sh
cd client
npm install
npm start
```
**Update API URL in `services/api.js`**
```js
const API_URL = 'http://127.0.0.1:8000/api';
```

## 🛠 API Endpoints
### Auth Routes
| Method | Endpoint       | Description |
|--------|---------------|-------------|
| POST   | /auth/sign up | Register User |
| POST   | /auth/login    | Login User |


### Ticket Routes
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| GET    | /tickets        | Get All Tickets |
| POST   | /tickets        | Create a Ticket |
| GET    | /tickets/:id    | Get Single Ticket |
| PUT    | /tickets/:id    | Update Ticket |
| DELETE | /tickets/:id    | Delete Ticket |

### User Routes
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| GET    | /user        | Get All user |
| POST   | /user        | Create a user |
| GET    | /user/:id    | Get Single user |
| PUT    | /user/:id    | Update user |
| DELETE | /user/:id    | user Ticket |

## 📩 Contact
If you have any questions, feel free to reach out!

💼 **Built for job applications** – Ready to showcase my skills! 🚀

