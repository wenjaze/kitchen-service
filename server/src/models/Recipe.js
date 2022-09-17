const mongoose = require('mongoose');

const { Schema } = mongoose;

const IngredientName = {
  val: {
    type: String,
    enum: ['paradicsom',
      'paprika',
      'vörös hagyma',
      'zöldborsó',
      'liszt',
      'tej',
      'cukkini',
      'tojás',
      'fokhagyma',
      'petrezselyem',
      'sajt',
      'zsemlemorzsa',
      'olaj',
      'erős pista'],
    required: true,
  },
  viewVal: {
    type: String,
    required: true,
  },
};

const QuantityType = {
  type: String,
  enum: ['db',
    'tk',
    'ek',
    'g',
    'ml'],
};

const Ingredient = {
  quantityType: QuantityType,
  quantity: Number,
  ingredientName: IngredientName,
};

const recipeSchema = new Schema({
  id: mongoose.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  ingredients: [Ingredient],
  href: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  vegetarian: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
