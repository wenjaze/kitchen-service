import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/rest/models/mongoose.gen';
import { OwnedIngredient } from '../add-ingredient/add-ingredient.component';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
})
export class IngredientListComponent {
  @Input() ingredient!: OwnedIngredient;
  @Output() removeIngredient = new EventEmitter<OwnedIngredient>();

  emitRemoveEvent(){
    this.removeIngredient.emit(this.ingredient)
  }
}
