import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ingredient } from 'src/app/rest/models/mongoose.gen';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  public ingredientFormGroup!: FormGroup;
  public ingredients: Ingredient[] = [];
  public selectedIngredient!: Ingredient;

  constructor(private apiService: ApiService) {
    this.ingredientFormGroup = new FormGroup({
      ingredientQuantity: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.ingredientFormGroup.value['ingredientName'];
  }
}
