const { Router } = require('express');
const { ResponseModel } = require('../models/req/ResponseModel');

const Ingredient = require('../models/Ingredient');

const router = Router();

router.get('/get', async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    res.status(200);
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
});

router.post('/getByName', async (req, res, next) => {
  try {
    const searchQuery = {
      $or: [
        { 'ingredientName.val': { $regex: req.body.name, $options: 'i' } },
        { 'ingredientName.viewVal': { $regex: req.body.name, $options: 'i' } },
      ],
    };

    const recipes = await Ingredient.find(searchQuery);
    res.status(200);
    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const ingredient = new Ingredient(req.body);
    const savedIngredient = await ingredient.save();
    const response = ResponseModel(true, 'Ingredient successfully created.', savedIngredient);

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
