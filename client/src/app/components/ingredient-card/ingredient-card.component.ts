import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IngredientItem } from '../recipe-tile/recipe-tile.component';


@Component({
    selector: 'app-ingredient-card',
    templateUrl: './ingredient-card.component.html',
    styleUrls: ['./ingredient-card.component.scss']
})
export class IngredientCardComponent implements OnInit,OnDestroy {

    @Input() recipeCard!:boolean;
    @Input() availableIngredients!:IngredientItem[];
    @Output() removeFired: EventEmitter<IngredientItem> = new EventEmitter<IngredientItem>();

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        
    }

    removeIngredient(ingredientItem:IngredientItem){
        this.removeFired.emit(ingredientItem);
    }

}
