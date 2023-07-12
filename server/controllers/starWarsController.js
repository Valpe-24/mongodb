const models = require('../models/starWarsModels');

const starWarsController = {};

starWarsController.getCharacters = async (req, res, next) => {
  // write code here
  models.Person.find({})
    .exec()
    .then((result) => {
      console.log(result);
      res.locals = result;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

starWarsController.getSpecies = (req, res, next) => {
  // write code here

  next();
};

starWarsController.getHomeworld = (req, res, next) => {
  // write code here

  next();
};

starWarsController.getFilm = (req, res, next) => {
  // write code here

  next();
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = starWarsController;
