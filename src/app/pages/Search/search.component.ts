import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  searchDrinks: any[] = [];
  searchDrinksIng: any[] = [];
  ingredients: string[] = [];

  jsonIn = {
    searchInputDrink: '',
    searchInputIngr: '',
  };
  handleSearchDrink(): void {
    this.apiService
      .getCocktailsByInput(`${this.jsonIn.searchInputDrink}`)
      .subscribe((response: any) => {
        this.searchDrinks = response.drinks;
      });
  }
  handleSearchIngr(): void {
    this.apiService
      .getCocktailByIngr(`${this.jsonIn.searchInputIngr}`)
      .subscribe((response: any) => {
        this.searchDrinksIng = response.drinks;
      });
  }
  ngOnInit(): void {
    let data: data[] = [];
    this.apiService.getAllIngredients().subscribe((response: any) => {
      data = response.drinks;
      data.map((el: data) => {
        this.ingredients.push(el.strIngredient1);
      });
    });
  }
}

type data = {
  strIngredient1: string;
};
