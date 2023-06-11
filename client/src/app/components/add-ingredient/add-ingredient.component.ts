import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ingredient } from 'src/app/rest/models/mongoose.gen';
import { ApiService } from 'src/app/services/api.service';

export interface OwnedIngredient {
  ingredient:Ingredient,
  quantityName: string,
  quantityNumber: number;
}

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  @Input() ingredients!:Ingredient[];
  @Output() ingredientToAdd = new EventEmitter<OwnedIngredient>();
  public selectedIngredient!: Ingredient | undefined;
  public selectedQuantityType!: string | undefined;
  public selectedIngredientNumber!:number | undefined;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {}

  getPossibleQuantityTypes() {
    if (this.selectedIngredient?.quantityTypes) {
      return this.selectedIngredient.quantityTypes;
    }
    return [];
  }

  addIngredient() {
    let ingredientToEmit : OwnedIngredient = {
      ingredient: this.selectedIngredient!,
      quantityName: this.selectedQuantityType!,
      quantityNumber: this.selectedIngredientNumber!
    } 
    this.ingredientToAdd.emit(ingredientToEmit)
    this.selectedIngredient = undefined;
    this.selectedIngredientNumber = undefined;
    this.selectedQuantityType = undefined;
  }

  hasNoQuantity(){
    return this.getPossibleQuantityTypes().length == 0 || (this.getPossibleQuantityTypes().length == 1 && this.getPossibleQuantityTypes()[0] == null)
  }

  isFormValid() : boolean{
    if (this.hasNoQuantity()) {
      return this.selectedIngredient != undefined;
    }
    else {
      return this.selectedIngredient !== undefined && this.selectedIngredientNumber !== undefined && this.selectedQuantityType !== undefined 
    }
  }
}
