import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks:any[] = [];
  searchDrinks:any[] = [];
  constructor(private httpClient: HttpClient) {}

  jsonIn = {
    searchInput: '',
  };

  handleSearch(): void {
    this.httpClient
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.jsonIn.searchInput}`
      )
      .subscribe((response: any) => {
        this.searchDrinks = response.drinks;
      });
  }

  ngOnInit(): void {
    this.httpClient
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
  }
}
