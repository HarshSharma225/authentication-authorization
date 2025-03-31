// import React from 'react'

// function Server() {
   
// }

// export default Server

const express = require('express');
const signupRoute = require('./routes/signup')
const bodyParser = require("body-parser");

const app = express();
const Port = 5000;

app.use(bodyParser.json());

app.use("/user",signupRoute);

app.listen(Port, () => {
    console.log(`Server listening on port ${Port}`)
})