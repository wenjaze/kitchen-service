const { Router } = require('express');
const { ResponseModel } = require('../models/req/ResponseModel');
const Recipe = require('../models/Recipe');

const router = Router();

router.post('/all', async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.status(200);
    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();
    const response = ResponseModel(true, 'Recipe successfully created.', savedRecipe);
    res.status(200);
    res.json(response);
  } catch (error) {
    if (error.name === 'ValidationError' || error.name === 'MongoDatabaseError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
