import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Ingredient, Recipe } from '../rest/models/mongoose.gen';

@Injectable()
export class ApiService {
  private url = environment.REST_API_BASE_URL;

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  constructor(private http: HttpClient) {}

  // Create recipe
  public createRecipe(data: any): Observable<Recipe> | undefined {
    let url = `${this.url}/recipes/create`;
    let createResult;
    try {
      let createResult = this.http.post(url, data).pipe(
        map((x) => {
          console.log(x);
        })
      );
    } catch (error: any) {
      this.handleError(error);
    }
    if (createResult != undefined) {
      return createResult;
    } else {
      throw new Error('Could not create recipe.');
    }
  }

  public getIngredientByName(name: string): Observable<Ingredient[]> {
    const request: Observable<Ingredient[]> = this.http.post<Ingredient[]>(
      `${this.url}/ingredients/getByName`,
      { name: name }
    );
    return this.handleCall<Ingredient[]>(request);
  }

  public getIngredients(): Observable<Ingredient[]> {
    return this.handleCall<Ingredient[]>(
      this.http.get<Ingredient[]>(`${this.url}/ingredients/getByName`)
    );
  }

  /*   // Get all recipes
  public getRecipes(): Observable<Recipe[]> {
    let recipes;
    try {
      recipes = this.http.get<Recipe[]>(`${this.url}/recipes/get`);
    } catch (error: any) {
      this.handleError(error);
    }
    if (recipes != undefined) {
      return recipes;
    } else {
      throw new Error("Could not create recipe.");
    }
  }; */

  public getRecipes(): Observable<Recipe[]> {
    return this.handleCall<Recipe[]>(
      this.http.get<Recipe[]>(`${this.url}/recipes/get`)
    );
  }

  private handleCall<T>(httpMethod: Observable<T>): Observable<T> {
    let result;
    try {
      result = httpMethod;
    } catch (error: any) {
      this.handleError(error);
    }
    if (result != undefined) {
      return result;
    } else {
      throw new Error(`Could not execute call:${httpMethod.toString()}`);
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
