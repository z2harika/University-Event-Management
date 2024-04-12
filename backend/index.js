const express = require('express')
const app = express()
const port=5000
const mongoDB = require('./db')
mongoDB();
const cors = require('cors');
app.get('/',(req,res)=>{
    res.send("Hello World!")
})
app.use(express.json())
const allowedOrigins = ['https://uem-chi.vercel.app'];
app.use(cors({
    origin: '*'
  }));
app.use('/api',require("./Routes/Clubs"))
app.use('/api',require("./Routes/RegisterEvent"))
app.use('/api',require("./Routes/Events"));
app.use('/api',require("./Routes/Login"))
app.listen(port,()=>{
    console.log("Listening on 5000")
})