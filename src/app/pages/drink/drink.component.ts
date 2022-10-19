import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}
  drink: any;
  ngOnInit(): void {
    const id = this.route.snapshot.params['idDrink']!; 
    this.httpClient
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe((response: any) => {
        this.drink = response.drinks;
      });
  }
}