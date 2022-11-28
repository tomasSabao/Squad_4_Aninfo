const express = require("express");
const projectRouter = require("../src/routes/project.routes");
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use('/api', projectRouter);
require('./swagger-setup')(app);

// connection to MongoDB
mongoose
    .connect(process.env.URL)
    .then(() => console.log('Connect to MongoDB'))
    .catch((error) => console.log('Failed connection to MongoDB'));

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});