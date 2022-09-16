import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientCardComponent } from '../ingredient-card/ingredient-card.component';
import { Ingredient, IngredientItem, QuantityType } from '../recipe-tile/recipe-tile.component';

@Component({
    selector: 'app-ingredient-adder',
    templateUrl: './ingredient-adder.component.html',
    styleUrls: ['./ingredient-adder.component.scss']
})
export class IngredientAdderComponent implements OnInit {
    @Output() ingredientItem = new EventEmitter<IngredientItem>();
    quantity!: number | undefined;
    quantityType!: QuantityType;
    ingredient!: Ingredient;

    selectedIngredient : IngredientItem | undefined;

    availableIngredients: IngredientItem[] = [
    ]

    selectableIngredients: IngredientItem[] = [
        {
            quantityType: QuantityType.db,
            ingredient: Ingredient.cukkini
        },
        {
            quantityType: QuantityType.tk,
            ingredient: Ingredient.erőspista
        },
        {
            quantityType: QuantityType.db,
            ingredient: Ingredient.fokhagyma
        },
        {
            quantityType: QuantityType.ek,
            ingredient: Ingredient.liszt
        },
        {
            ingredient: Ingredient.olaj
        },
        {
            quantityType: QuantityType.db,
            ingredient: Ingredient.paprika
        },
        {
            quantityType: QuantityType.db,
            ingredient: Ingredient.paradicsom
        },
        {
            quantityType: QuantityType.db,
            ingredient: Ingredient.petrezselyem
        },
        {
            quantityType: QuantityType.g,
            ingredient: Ingredient.sajt
        },
        {
            quantityType: QuantityType.ml,
            ingredient: Ingredient.tej
        },
        {
            quantityType: QuantityType.db,
            ingredient: Ingredient.tojás
        },
        {
            quantityType: QuantityType.db,
            ingredient: Ingredient.vöröshagyma
        },
        {
            quantityType: QuantityType.g,
            ingredient: Ingredient.zsemlemorzsa
        },
        {
            quantityType: QuantityType.g,
            ingredient: Ingredient.zöldborsó
        },
    ]

    constructor() { }

    ngOnInit(): void {

    }

    ngAfterViewInited(): void {
        /*         this.ingredientCard.removeFired.subscribe((val: number) => {
                    if (val) {
                        console.log(val)
                    }
                    else {
                        console.log("NO value.")
                    }
                }); */
    }

    addToAvailableIngredients() {
        let selectedItem = {
            ingredient:this.selectedIngredient!.ingredient,
            quantity:this.quantity,
            quantityType:this.selectedIngredient?.quantityType
        }
        this.ingredientItem.emit(selectedItem);
        this.selectedIngredient = undefined;
    }

    ingredientChange(){
        this.quantity = undefined;
    }

}
