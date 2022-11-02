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
    this.route.paramMap.subscribe((res: any) => {
      if (res.params.letterPag !== null) {
        this.jsonIn.active = res.params.letterPag;
      } else {
        this.jsonIn.active = 'A';
      }
      this.apiService
        .getCocktailByFirstLetter(this.jsonIn.active)
        .subscribe((response: any) => {
          this.drinks = response.drinks;
        });
    });
  }

  printRandomDrink(): void {
    this.apiService.getRandomDrink().subscribe((response: any) => {
      this.drink = response.drinks[0];
    });
  }

  ngOnInit(): void {
    this.handleLetterPagination();
    this.printRandomDrink();
  }
}
