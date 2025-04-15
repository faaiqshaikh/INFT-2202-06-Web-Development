const Animal = require('../model/Animal');

exports.showHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

exports.showAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find().sort({ _id: -1 }).lean();
    res.render('all-animals', { animals });
  } catch (err) {
    console.error('Database error:', err);
    res.render('error', { message: 'Failed to load animals' });
  }
};

exports.showEntryForm = (req, res) => {
  res.render('entry-form', { title: 'Add Animal' });
};

exports.addAnimal = async (req, res) => {
  try {
    const newAnimal = new Animal(req.body);
    await newAnimal.save();
    res.redirect('/list');
  } catch (err) {
    console.error(err);
    res.status(400).render('entry-form', { error: 'Validation failed' });
  }
};

exports.showEditForm = async (req, res) => {
  const animal = await Animal.findById(req.params.id).lean();
  res.render('edit-animal', {
    title: 'Edit Animal - ' + animal.commonName, // Dynamic title
    animal
  });
};
  
  exports.updateAnimal = async (req, res) => {
    try {
      await Animal.findByIdAndUpdate(req.params.id, req.body);
      res.redirect('/list');
    } catch (err) {
      console.error(err);
      res.render('edit-animal', { 
        title: 'Edit Animal', 
        animal: req.body, 
        error: 'Update failed' 
      });
    }
  };
  
  exports.deleteAnimal = async (req, res) => {
    try {
      await Animal.findByIdAndDelete(req.params.id);
      res.redirect('/list');
    } catch (err) {
      console.error(err);
      res.redirect('/list');
    }
  };