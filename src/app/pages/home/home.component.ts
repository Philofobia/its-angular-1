import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: any[] = [];
  drink: any = {};
  constructor(private apiService: ApiService) {}

  jsonIn = {
    searchInput: '',
    alphabet: ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split(''),
    active: "A"
  };

  handleLetterPagination(letter: string): void {
    this.apiService
      .getCocktailByFirstLetter(`${letter}`)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
      this.jsonIn.active = letter
  }

  printRandomDrink(): void {
    this.apiService.getRandomDrink()
    .subscribe((response: any) => {
      this.drink = response.drinks[0];
    })
  }

  ngOnInit(): void {
    this.handleLetterPagination('A');
    this.printRandomDrink();
  }
}
