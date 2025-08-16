# 📝 ToDo App (MERN + Tailwind CSS)

This is a basic **ToDo Application** built using the **MERN stack**:  
- **MongoDB** – Database  
- **Express.js** – Backend framework  
- **React.js** – Frontend library  
- **Node.js** – Runtime environment  
- **Tailwind CSS** – For styling  

The app allows users to add, update, and delete todos with a clean and responsive UI.

---

## 🚀 Features
- Create, read, and delete and mark as done todos 
- Responsive UI with Tailwind CSS  
- Organized **frontend** and **backend** structure  
- Environment variable support using `.env`

---



## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```
git clone https://github.com/RiteshPanchal279/todo_app.git
cd todo_app

cd backend
npm install
```
create .env file 
```
MONGO_URL=Your_mongo_url
PORT = 3000
```

run command `npm run dev` to start your backend

after it do 
```
cd ../frontend
npm install
```
create .env file 
```
VITE_API_BASE_URL=http://localhost:3000
```

to start your frontend :
`npm run dev`