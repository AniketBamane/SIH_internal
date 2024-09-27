import express from 'express';

const app = express();

app.use("/",(req,res)=>{
  res.send("Welcome to my API");
})

app.listen(3000,(req,res)=>{
  console.log("Server is running on port 3000");
})