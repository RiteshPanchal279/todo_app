import express from "express";
import dbConnect from "./db.js";
import dotenv from 'dotenv'
import cors from 'cors'
import todoRoutes from "./routes/todoRoutes.js"

dotenv.config()

const app  = express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
   res.send("Hello from home")
})

app.use("/todo",todoRoutes);

dbConnect()
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
   console.log(`App listning at ${PORT} port`);
})
