const mongoose = require('mongoose');

const { Schema } = mongoose;

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
    unique: true,
  },
  viewVal: {
    type: String,
    required: true,
    unique: true,
  },
};

const QuantityType = {
  type: String,
  enum: ['db',
    'tk',
    'ek',
    'g',
    'ml',
    'csokor',
    null],
};

const ingredientSchema = new Schema({
  id: mongoose.ObjectId,
  ingredientName: IngredientName,
  quantityTypes: [QuantityType],
}, { timestamps: true });

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
