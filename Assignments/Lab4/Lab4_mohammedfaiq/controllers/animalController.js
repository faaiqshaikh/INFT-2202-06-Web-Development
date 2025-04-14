const Animal = require('../model/Animal');

exports.showHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

exports.showAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.render('all-animals', { title: 'Animal List', animals });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.addAnimal = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.render('entry-form', { title: 'Add Animal', animals });
  } catch (err) {
    console.error(err);
    res.status(400).render('entry-form', { error: 'Validation failed' });
  }
};

exports.showEditForm = async (req, res) => {
    try {
      const animal = await Animal.findById(req.params.id);
      res.render('edit-form', { title: 'Edit Animal', animal });
    } catch (err) {
      console.error(err);
      res.redirect('/list');
    }
  };
  
