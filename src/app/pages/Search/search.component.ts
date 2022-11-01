import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { handleSortingIngredients, handleSortingSearchDrink } from 'src/app/_service/logic';

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
        const data = handleSortingSearchDrink(response.drinks);
        this.searchDrinks = data;
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
      data = handleSortingIngredients(response.drinks)
      data.map((el: data) => {
        this.ingredients.push(el.strIngredient1);
      });
    });
  }
}

type data = {
  strIngredient1: string;
};
