import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks = [];
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.httpClient
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
    .subscribe((response: any) => {
      this.drinks = response.drinks;
    })
  }
}

interface drink {
  idDrink: string,
  nameDrink: string,
  imgDrink: string,
}