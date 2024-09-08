import express from "express";
import {connectDB }from "./db/connectDB.js";
import dotenv from "dotenv";


const app=express();
dotenv.config();
app.get("/",(req,res)=>{
    res.send("hello world! ");
})

app.listen(3000,()=>{
    connectDB();
    console.log("server is working");
});
