import express from "express";



const app=express();

app.get("/",(req,res)=>{
    res.send("hello world! youtube");
})

app.listen(3000,()=>{
    console.log("server is working");
});