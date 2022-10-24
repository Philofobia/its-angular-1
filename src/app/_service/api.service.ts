import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  getCocktailByFirstLetter(firstLetter: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`
    );
  }
  getCocktailsByInput(input: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
    );
  }
  getCocktailById(id: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
  getCocktailByIngr(input: string){
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`
    );
  }
  getAllIngredients(){
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
    );
  }
  getRandomDrink() {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
  }
}
