import { Component } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

type jsonIn = {
  inputDrink: string;
  inputIngr: string;
};

@Component({
  selector: 'app-drink',
  templateUrl: './searchDouble.component.html',
})
export class SearchDoubleComponent {
  constructor(private apiService: ApiService) {}
  jsonIn: jsonIn = {
    inputDrink: '',
    inputIngr: '',
  };
  drinks: [] = [];

  handleSubmit() {
    this.apiService
      .getCocktailsByInput(`${this.jsonIn.inputDrink}`)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
        this.drinks.map((el) => {
            this.handleMapping(el);
          });
          this.handleFilter();
      })
  }
  handleFilter() {
    
  }

  handleMapping = (el: any) => {
    el.drinkIngr = [];
    Object.keys(el).forEach((key) => {
      if (el[key] === null) {
      } else if (key.startsWith('strIngredient')) {
        const index: string = key.replace('strIngredient', '');
        el.drinkIngr.push({
          name: el[key],
          measure: el[`strMeasure${index}`],
        });
      }
    });
    console.log(el.drinkIngr)
  };
}
