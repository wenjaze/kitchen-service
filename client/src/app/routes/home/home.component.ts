import { Component, OnInit } from '@angular/core';
import { OwnedIngredient } from 'src/app/components/add-ingredient/add-ingredient.component';
import { Ingredient, Recipe } from 'src/app/rest/models/mongoose.gen';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  recipes!: Recipe[];
  ingredients!: Ingredient[];
  ownedIngredients: OwnedIngredient[] = [];

  ngOnInit(): void {
    this.apiService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
    this.apiService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  removeIngredient(ingredient: OwnedIngredient) {
    const index = this.ownedIngredients.indexOf(ingredient,0);

    if (index !== -1) {
      this.ownedIngredients.splice(index, 1);
    }
    
  }

  getIngredient(ingredient: OwnedIngredient) {
    this.ownedIngredients.push(ingredient);
  }

/*   filterRecipesByOwnedIngredients(){
    this.recipes.filter((recipe:Recipe) => recipe.ingredients.)
  } */
/*   
  hasIngredient(ingredientName:string, recipe:Recipe){
    if (recipe.ingredients.)
  } */
}
