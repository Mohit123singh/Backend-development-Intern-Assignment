
# User CRUD API

This is a simple RESTful API built using **Node.js**, **Express**, and **MongoDB** (or an in-memory array) to manage users.  
It supports basic CRUD (Create, Read, Update, Delete) operations with proper error handling and JSON responses.

---

## ✨ Features

1. **Create a User** – Accepts name, email, and age, then stores them in a database.
2. **Retrieve All Users** – Returns a list of users.
3. **Retrieve a Single User** – Fetches a user by ID.
4. **Update a User** – Updates user details using an ID.
5. **Delete a User** – Removes a user using an ID.
6. JSON formatted responses.
7. Proper error handling for invalid input, non-existent users, etc.
8. Clean and well-commented code structure.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JavaScript

---

## 📥 Installation and Setup

1. **Clone the repository:**

```bash
git clone git@github.com:Mohit123singh/Backend-development-Intern-Assignment.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Environment Variables:**

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```


4. **Run the server:**

```bash
npm start
```

The server will run at:

```
http://localhost:5000
```

---

## 📑 API Endpoints Documentation

| Method | Endpoint           | Description                       | Request Body (JSON)                          |
|-------|--------------------|-----------------------------------|---------------------------------------------|
| POST  | `/users`            | Create a new user                 | `{ "name": "Mohit Sngh", "email": "mohit@mail.com", "age": 24 }` |
| GET   | `/users`            | Retrieve all users                | None                                        |
| GET   | `/users/:id`        | Retrieve a single user by ID      | None                                        |
| PUT   | `/users/:id`        | Update a user by ID               | `{ "name": "Updated Name", "age": 30 }`     |
| DELETE| `/users/:id`        | Delete a user by ID               | None                                        |

---

## 📄 Sample Requests and Responses

### 1. **Create User**

**Request:**

```http
POST /users
Content-Type: application/json

{
  "name": "Vishal",
  "email": "vishal@gmail.com",
  "age": 24
}
```

**Response:**

```json
{
  
  "user": {
    "_id": "67e061343fff4df19972f78b",
    "name": "Vishal",
    "email": "vishal@gmail.com",
    "age": 24
  }
}
```

---

### 2. **Retrieve All Users**

```http
GET /users
```

**Response:**

```json
[
  {
    "_id": "67e04c164c72c35f9356a68a",
    "name": "Mohit Singh",
    "email": "mohit@example.com",
    "age": 24,
  },
  {
    "_id": "67e061343fff4df19972f78b",
    "name": "Vishal",
    "email": "vishal@gmail.com",
    "age": 24
  }
]
```

---

### 3. **Retrieve Single User**

```http
GET /users/67e04c164c72c35f9356a68a
```

**Response:**

```json
{
  "_id": "67e04c164c72c35f9356a68a",
  "name": "Mohit Singh",
  "email": "mohit@gmail.com",
  "age": 24
}
```

---

### 4. **Update User**

```http
PUT /users/
Content-Type: application/json

{
  "name": "Vishal Updated",
  "age": 24
}
```

**Response:**

```json
{
  
  "user": {
    "_id": "67e061343fff4df19972f78b",
    "name": "Vishal Updated",
    "email": "vishal@gmail.com",
    "age": 24
  }
}
```

---

### 5. **Delete User**

```http
DELETE /users/67e061343fff4df19972f78b
```

**Response: (Id of deleted-user)**

```json
{
  "67e061343fff4df19972f78b" 
}
```

---

## ⚠️ Error Handling Examples

- **Invalid ID Format:**

```json
{
  "error": "Invalid User ID format"
}
```

- **User Not Found:**

```json
{
  "error": "User not found"
}
```

- **Missing Required Fields:**

```json
{
  "error": "Name, email, and age are required"
}
```

---

## 🧑‍💻 Author

**Mohit Kumar Singh**

---

## 📢 Notes:


- All responses are in JSON format.
- Proper error handling is implemented for each route.
