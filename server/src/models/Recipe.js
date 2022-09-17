const mongoose = require('mongoose');

const { Schema } = mongoose;

const defaultRequiredDate = {
  type: Date,
  default: Date.now,
  required: true,
};

const requiredString = {
  type: String,
  required: true,
};

const requiredBoolean = {
  type: Boolean,
  required: true,
};

const IngredientName = {
  val: {
    type: String,
    enum: ['paradicsom',
      'paprika',
      'vöröshagyma',
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
      'erőspista'],
    required: true,
  },
  viewVal: requiredString,
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
  quantity: {
    type: Number,
    required: false,
  },
  ingredientName: IngredientName,
};

const recipeSchema = new Schema({
  id: mongoose.ObjectId,
  title: requiredString,
  description: requiredString,
  ingredients: [Ingredient],
  href: requiredString,
  image: requiredString,
  vegetarian: requiredBoolean,
  created_at: defaultRequiredDate,
  updatead_at: defaultRequiredDate,
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
