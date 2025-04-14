// app.js

/**
 * Author: Mohammedfaiq Shaikh
* Student ID: 100905727
* Date Completed: 2025-Apr-14
*/

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');
const animalRoutes = require('./routes/animal');

const app = express();

// MongoDB Connection
mongoose.connect('mongodb+srv://faiqsmongodb:sqX1hbl7QVUcLap4@lab4cluster.6hjnxgp.mongodb.net/Lab4Database?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Handlebars Setup
app.engine('.hbs', exphbs.engine({
  extname: '.hbs',           
  defaultLayout: 'main',      
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  partialsDir: path.join(__dirname, 'views/animals')
}));

app.set('view engine', '.hbs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', animalRoutes);

// Start Server
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});