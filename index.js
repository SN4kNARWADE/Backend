
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello World I am a sanika narwdae");
})

app.get("/twitter",(req,res)=>{
    res.send("I am a twitter!......");
})
 
app.listen(process.env.PORT,()=>{
    console.log(`Listen on port no ${PORT}`);
})