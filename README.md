# 📝 Permalist - To-Do List Web App

A simple, full-stack to-do list web application built with **Node.js**, **Express**, **PostgreSQL**, and **EJS**. Users can add, edit, and delete tasks, with all data stored persistently in a PostgreSQL database.

---

## 📌 Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete completed or unwanted tasks
- 📦 PostgreSQL database integration
- 🎨 Dynamic front-end using EJS templating
- 📁 Static assets served from `public/` directory

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/permalist-todo-list.git
cd permalist-todo-list
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup PostgreSQL Database

Make sure PostgreSQL is installed and running on your system. Then, create the required database and table:

```sql
CREATE DATABASE permalist;

\c permalist

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);
```

### 4. Configure the Database Connection

In `index.js`, make sure your DB credentials match your PostgreSQL setup:

```js
const db = new pg.Client({
  database: "permalist",
  host: "localhost",
  user: "postgres",
  password: "your_password_here",
  port: 5432,
});
```

### 5. Run the Application

```bash
npm start
```

Then open your browser and go to:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🗂️ Project Structure

```
permalist-todo-list/
├── public/              # Static files (CSS, JS, images)
├── views/               # EJS templates
│   └── index.ejs
├── index.js             # Main Express server file
├── package.json
└── README.md
```

---

## 💡 Technologies Used

* Node.js
* Express.js
* PostgreSQL (pg)
* EJS (Embedded JavaScript templating)
* body-parser

---

## 🧪 Sample SQL Snippet

```sql
-- Create database and table for items
CREATE DATABASE permalist;

\c permalist

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);
```

---

## 🙋‍♂️ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open-source.

---

## ✨ Author

Developed by \[Muhammad Shaheer]
---

![mainpage](https://github.com/user-attachments/assets/4afda317-eee9-4c5a-a672-e241c1e838a8)
---
![pgadmin](https://github.com/user-attachments/assets/1c6c5193-db5d-4b4d-b816-12895d7ddc3a)
---


