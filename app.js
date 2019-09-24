const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// middleware
app.use(cors());
app.use(bodyParser.json());

// import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

// Routes
app.get('/', (req,res) => {
  res.send('We are on home');
});

// connect to mongoDB atlas
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => {
  console.log('connected to DB')
});

// listen to the server
app.listen(3000);
