require("dotenv").config()
const express = require('express')
const axios = require("axios");
const cors = require('cors')
const app = express()
const PORT = 7000;
const router = require('./routes/auth_route')
const connectdb = require('./db/connectdb')


// middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  // allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json())


// routes
app.use('/api/' , router)

// database + server
connectdb().then(()=>{

    app.listen(PORT , ()=>{
        console.log(`Server Started on Port ${PORT}`);
    })
})