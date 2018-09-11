import SourceMapSupport from 'source-map-support';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// add Source Map Support
SourceMapSupport.install();

const task = require('./routes/todoRoute');

const app = express();

// Body parser middleware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config 
const db = 'mongodb://admin:admin123@ds221271.mlab.com:21271/todo';


// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



// Use Routes
app.use('/api/task', task);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port`));  