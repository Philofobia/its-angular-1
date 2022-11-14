import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  drinks: any[] = [];
  drink: any = {};

  jsonIn = {
    searchInput: '',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    active: '',
  };

  handleLetterPagination(): void {
    this.apiService
      .getCocktailByFirstLetter(this.jsonIn.active)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
  }

  printRandomDrink(): void {
    this.apiService.getRandomDrink().subscribe((response: any) => {
      this.drink = response.drinks[0];
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      const letter = res.get('letterPag')
      if (letter !== null) {
        this.jsonIn.active = letter;
      } else {
        this.jsonIn.active = 'A';
      }
      this.handleLetterPagination();
    });
    this.printRandomDrink();
  }
}
