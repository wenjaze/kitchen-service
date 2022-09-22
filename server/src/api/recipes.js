const { Router } = require('express');
const m2s = require('mongoose-to-swagger');
const { ResponseModel } = require('../models/req/ResponseModel');

const Recipe = require('../models/Recipe.ts');

// eslint-disable-next-line no-unused-vars
const swaggerSchema = m2s(Recipe);

const router = Router();

router.get('/get', async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.status(200);
    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();
    const response = ResponseModel(true, 'Recipe successfully created.', savedRecipe);
    res.status(200);
    res.json(response);
  } catch (error) {
    if (error.name === 'ValidationError' || error.name === 'MongoServerError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
