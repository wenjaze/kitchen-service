/* tslint:disable */
/* eslint-disable */

// ######################################## THIS FILE WAS GENERATED BY MONGOOSE-TSGEN ######################################## //

// NOTE: ANY CHANGES MADE WILL BE OVERWRITTEN ON SUBSEQUENT EXECUTIONS OF MONGOOSE-TSGEN.

import mongoose from "mongoose";

/**
 * Lean version of RecipeIngredientDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `RecipeDocument.toObject()`.
 * ```
 * const recipeObject = recipe.toObject();
 * ```
 */
export type RecipeIngredient = {
  quantityType?: "db" | "tk" | "ek" | "g" | "ml";
  quantity?: number;
  ingredientName: {
    val:
      | "paradicsom"
      | "paprika"
      | "vöröshagyma"
      | "zöldborsó"
      | "liszt"
      | "tej"
      | "cukkini"
      | "tojás"
      | "fokhagyma"
      | "petrezselyem"
      | "sajt"
      | "zsemlemorzsa"
      | "olaj"
      | "erőspista";
    viewVal: string;
  };
};

/**
 * Lean version of RecipeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `RecipeDocument.toObject()`. To avoid conflicts with model names, use the type alias `RecipeObject`.
 * ```
 * const recipeObject = recipe.toObject();
 * ```
 */
export type Recipe = {
  id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  ingredients: RecipeIngredient[];
  href: string;
  image: string;
  vegetarian: boolean;
  _id: mongoose.Types.ObjectId;
  updatedAt?: Date;
  createdAt?: Date;
};

/**
 * Lean version of RecipeDocument (type alias of `Recipe`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Recipe } from "../models"
 * import { RecipeObject } from "../interfaces/mongoose.gen.ts"
 *
 * const recipeObject: RecipeObject = recipe.toObject();
 * ```
 */
export type RecipeObject = Recipe;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type RecipeQuery = mongoose.Query<any, RecipeDocument, RecipeQueries> &
  RecipeQueries;

/**
 * Mongoose Query helper types
 *
 * This type represents `RecipeSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type RecipeQueries = {};

export type RecipeMethods = {};

export type RecipeStatics = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Recipe = mongoose.model<RecipeDocument, RecipeModel>("Recipe", RecipeSchema);
 * ```
 */
export type RecipeModel = mongoose.Model<RecipeDocument, RecipeQueries> &
  RecipeStatics;

/**
 * Mongoose Schema type
 *
 * Assign this type to new Recipe schema instances:
 * ```
 * const RecipeSchema: RecipeSchema = new mongoose.Schema({ ... })
 * ```
 */
export type RecipeSchema = mongoose.Schema<
  RecipeDocument,
  RecipeModel,
  RecipeMethods,
  RecipeQueries
>;

/**
 * Mongoose Subdocument type
 *
 * Type of `RecipeDocument["ingredients"]` element.
 */
export type RecipeIngredientDocument = mongoose.Types.Subdocument & {
  quantityType?: "db" | "tk" | "ek" | "g" | "ml";
  quantity?: number;
  ingredientName: {
    val:
      | "paradicsom"
      | "paprika"
      | "vöröshagyma"
      | "zöldborsó"
      | "liszt"
      | "tej"
      | "cukkini"
      | "tojás"
      | "fokhagyma"
      | "petrezselyem"
      | "sajt"
      | "zsemlemorzsa"
      | "olaj"
      | "erőspista";
    viewVal: string;
  };
  _id: mongoose.Types.ObjectId;
};

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Recipe = mongoose.model<RecipeDocument, RecipeModel>("Recipe", RecipeSchema);
 * ```
 */
export type RecipeDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  RecipeQueries
> &
  RecipeMethods & {
    id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    ingredients: mongoose.Types.DocumentArray<RecipeIngredientDocument>;
    href: string;
    image: string;
    vegetarian: boolean;
    _id: mongoose.Types.ObjectId;
    updatedAt?: Date;
    createdAt?: Date;
  };