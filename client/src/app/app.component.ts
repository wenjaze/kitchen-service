import { Component } from '@angular/core';
import { Ingredient, IngredientItem, QuantityType } from './components/recipe-tile/recipe-tile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whatcanicook';

  availableStuff : IngredientItem[] = [
    {
        ingredient:Ingredient.cukkini,
        quantity:4,
        quantityType:QuantityType.db
    }
  ]

  getData(event:any){
    console.log(event)
  }
}
