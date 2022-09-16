import { Component, OnInit } from '@angular/core';
import { ConversionHelper } from 'src/app/helpers/conversion-helper';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import recipesJson from '../../../assets/resources/recipes.json';
import { Ingredient, IngredientItem, QuantityType, Recipe } from '../recipe-tile/recipe-tile.component';

@Component({
    selector: 'app-recepie-search',
    templateUrl: './recepie-search.component.html',
    styleUrls: ['./recepie-search.component.scss']
})
export class RecepieSearchComponent implements OnInit {

    recipeList: Recipe[] = ConversionHelper.jsonToRecipe(recipesJson);
    availableRecipes: Recipe[] = [];
    availableIngredients: IngredientItem[] = [
    ];

    filteredList!:Recipe[];
    availableRecipesCounter:number = 0;
    showRecipes: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    getIngredient(itemToAdd: IngredientItem) {
        let same = this.availableIngredients.find((item)=>item.ingredient == itemToAdd.ingredient)
        if (same && same.quantityType) {
            let newQuantity = +same.quantity! + +itemToAdd.quantity!;
            same.quantity = newQuantity;
        }
        else {
            this.availableIngredients.push(itemToAdd);
        }

        this.availableRecipesCounter = this.recipeList.filter((recipe) => {
            return this.hasIngredients(this.availableIngredients, recipe.ingredients);
        }).length;
        JSON.stringify(this.availableIngredients);
    }

    /**
     * @param  {IngredientItem[]} available
     * @param  {IngredientItem[]} needed
     */
    hasIngredients(available: IngredientItem[], needed: IngredientItem[]) {
        let availableCounter = 0;

        for (let i = 0; i < needed.length; i++) {
            const neededItem = needed[i];
            if (available.filter((availableItem) => availableItem.ingredient == neededItem.ingredient && availableItem.quantity! >= neededItem.quantity!).length > 0) {
                availableCounter++;
            }
            else {
                break;
            }
        }

        return availableCounter == needed.length;
    }

    selectAvailableRecipes() {
        this.filteredList  = this.recipeList.filter((recipe) => {
            return this.hasIngredients(this.availableIngredients, recipe.ingredients);
        })

        this.showRecipes = !this.showRecipes;
    }

    removeIngredient(itemToRemove: IngredientItem) {
        this.availableIngredients = this.availableIngredients.filter((item) => item != itemToRemove);
    }
}
