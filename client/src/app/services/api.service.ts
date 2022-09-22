import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Recipe } from '../rest/models/mongoose.gen';

@Injectable()
export class ApiService {
  private url = environment.REST_API_BASE_URL;

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');

  constructor(private http: HttpClient) { }

  // Create recipe

  public createRecipe(data:any): Observable<any> {

    let url = `${this.url}/recipes/create`;

    return this.http.post(url, data).pipe(map((x)=>{console.log(x)}));

  }

  // Get all recipes

  public getRecipes() {

    return this.http.get<Recipe[]>(`${this.url}/recipes/get`);

  };


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
