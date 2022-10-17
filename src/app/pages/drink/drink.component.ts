import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}
  drink = {};
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDrink')!;
    this.httpClient
      .get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe((response: any) => {
        this.drink = response.drink;
        console.log(this.drink)
      });
  }
}
