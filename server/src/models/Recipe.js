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

const requiredUniqueString = {
  type: String,
  required: true,
  unique: true,
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
  title: requiredUniqueString,
  description: requiredString,
  ingredients: [Ingredient],
  href: requiredUniqueString,
  image: requiredUniqueString,
  vegetarian: requiredBoolean,
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
