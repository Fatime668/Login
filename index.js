const express = require('express');
const { db } = require('./config/db');
const webUserRoutes = require('./routes/webUserRoutes')
const app = express()
app.use(express.json())

app.use("/api/webusers",webUserRoutes);

db.connect();


app.listen(8081,()=>{
    console.log("Server is running ...");
})

