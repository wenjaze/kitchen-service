const { Router } = require('express');
const { ResponseModel } = require('../models/req/ResponseModel');
const Recipe = require('../models/Recipe');

const router = Router();

router.post('/all', async (req, res) => {
  const recipes = await Recipe.find();
  res.status(200);
  res.json(recipes);
});

router.post('/', async (req, res, next) => {
  let response;
  try {
    const recipe = new Recipe(req.body);
    const recipesWithThisName = await Recipe.findOne({ title: recipe.title });
    if (recipesWithThisName) {
      res.status(422);
      response = ResponseModel(false, 'Recipe with same title already exists.', recipe);
    } else {
      const savedRecipe = await recipe.save();
      response = ResponseModel(true, 'Recipe successfully created.', savedRecipe);
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
  res.json(response);
});

module.exports = router;
