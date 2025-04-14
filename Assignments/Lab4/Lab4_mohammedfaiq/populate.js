require('dotenv').config();
const mongoose = require('mongoose');
const Animal = require('./model/Animal');
const mockData = require('./animal.json');

const DB_URI = `mongodb+srv://faiqsmongodb:sqX1hbl7QVUcLap4@lab4cluster.6hjnxgp.mongodb.net/Lab4Database?retryWrites=true&w=majority`;

mongoose.connect(DB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Animal.deleteMany();
    await Animal.insertMany(mockData);
    console.log('Data populated!');
    process.exit();
  })
  .catch(err => {
    console.error('Connection error:', err.message);
    process.exit(1);
  });