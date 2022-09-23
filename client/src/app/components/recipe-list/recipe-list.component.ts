import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/rest/models/mongoose.gen';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeList!: Recipe[];

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getRecipes().subscribe((recipes) => this.recipeList = recipes);
    console.log
  }


  showIfExists(val:any){
    if (val) {
      return val;
    }
    else return "";
  }
}
