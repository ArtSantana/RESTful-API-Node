const express = require('express');
const app = express();
const database = require("nedb");
require('dotenv/config');
// Server port
app.listen(process.env.PORT, () => console.log(`Server up at:${process.env.PORT}`));
// Import Routes
const postsRoute = require('./routes/posts');
const homeRoute = require('./routes/home');
// Using the routes for our requests
app.use('/posts', postsRoute);

app.use('/', homeRoute);
