# 📘 Module 3 Assignment – MongoDB Integration for LMS Backend

## 🎯 Objective

Integrate **MongoDB** into the LMS backend using **Mongoose**, allowing persistent user storage. This includes defining a user schema, connecting to the database, securing user credentials, and building user-related API endpoints.

---

## 🧠 Learning Outcomes

- Connect an Express.js server to MongoDB (Atlas or local)
- Define and use Mongoose schemas
- Securely store user passwords using bcrypt
- Implement RESTful APIs with database integration
- Apply best practices in backend development

---

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB / MongoDB Atlas
- Mongoose
- bcrypt
- dotenv
- TypeScript (if applicable)

---

## 📁 Project Structure

Module3_Assignment_<YourName>/
├── src/
│ ├── models/
│ │ └── user.model.ts
│ ├── routes/
│ │ └── userRoutes.ts
│ └── server.ts
├── .env.template
├── .gitignore
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/module3-assignment.git
cd module3-assignment
```
2. Install Dependencies
```bash

npm install
```
 ### 3. Configure Environment Variables
Create a .env file in the root directory based on .env.template:
```bash
env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
```
⚠️ Do not commit .env to GitHub. It's ignored via .gitignore.

🧱 API Endpoints
✅ POST /register
### Registers a new user with name, email, and password (hashed).

### Request Body:

```bash
json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```
## ✅ GET /user/:id
Fetches a single user by their MongoDB ObjectId.

## ✅ GET /users
Returns a list of all users in the database.

### 🔐 Password Hashing
Passwords are hashed using bcrypt before being stored in MongoDB for security.

### ✅ Conclusion
By completing this assignment, you’ve taken a significant step toward building a scalable and secure backend system. Integrating MongoDB with Mongoose allows you to persist user data effectively, while using bcrypt for password hashing ensures data security. These practices are foundational in modern web development and essential for any production-ready application. Keep experimenting and improving your backend skills!

