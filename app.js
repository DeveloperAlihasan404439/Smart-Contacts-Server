// Basic Lib Import
const express =require('express');
const router =require('./src/routes/api');
const app= new express();

// Security Middleware Lib Import
const cors =require('cors');


// Database Lib Import
const mongoose =require('mongoose');


// Security Middleware Implement
app.use(cors({
    origin: [
      "http://localhost:5173/",
        'https://super-cascaron-07d112.netlify.app'
    ],
    credentials: true,
  })
);

app.use(express.json())


require('dotenv').config()

// Mongo DB Database Connection
let URI=`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.wjgws1x.mongodb.net/contacts_management`;

mongoose.connect(URI)
.then(() => {
    console.log('Mongoose connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.toString());
  });


// Routing Implement
app.use("/",router)


// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;
















