const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// GET Routes
router.get('/', animalController.showHome);
router.get('/list', animalController.showAllAnimals);
router.get('/add', animalController.showEntryForm); 
router.get('/edit/:id', animalController.showEditForm);


// POST Routes
router.post('/addAnimal', animalController.addAnimal);
router.post('/edit/:id', animalController.updateAnimal);

module.exports = router;