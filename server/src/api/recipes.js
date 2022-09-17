const { Router } = require('express');

const Recipe = require('../models/Recipe');

const router = Router();

router.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.status(200);
  res.json(recipes);
});

router.post('/', async (req, res, next) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();
    res.json(savedRecipe);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
