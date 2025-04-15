const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// GET Routes
router.get('/', animalController.showHome);
router.get('/list', animalController.showAllAnimals);
router.get('/add', animalController.showEntryForm); 
router.get('/edit/:id', animalController.showEditForm);

// POST Routes
router.post('/add', animalController.addAnimal);
router.post('/edit/:id', animalController.updateAnimal);
router.post('/delete/:id', animalController.deleteAnimal);

module.exports = router;