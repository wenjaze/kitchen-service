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
