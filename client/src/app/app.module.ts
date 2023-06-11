import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { MatIconModule } from '@angular/material/icon';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { StringPlusSpaceOrUndefinedPipe } from './pipes/stringPlusSpaceOrUndefined.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeListComponent,
    AddIngredientComponent,
    IngredientListComponent,
    StringPlusSpaceOrUndefinedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatBottomSheetModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
