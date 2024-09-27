import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import connectToDb from "./config/dbConfig.js";
dotenv.config()
// instatiate the app 
const app = express()

//import routes
import authRouter from "./router/auth.js"

// setup cors 
app.use(cors({
  origin: process.env.FRONTEND_URL, // allow requests from this origin
  credentials: true, // allow sending cookies
  methods: ["GET", "POST", "PUT", "DELETE"], // allow these methods
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// import middlewares
app.use("/api/auth",authRouter)


connectToDb().then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
  })
})