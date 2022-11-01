import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.handleLetterPagination();
      }
    });
  }
  drinks: any[] = [];
  drink: any = {};

  jsonIn = {
    searchInput: '',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    active: '',
  };

  handleLetterPagination(): void {
    const id: string | null = this.route.snapshot.paramMap.get('letterPag');
    if (id !== null) {
      this.apiService
        .getCocktailByFirstLetter(id)
        .subscribe((response: any) => {
          this.drinks = response.drinks;
          this.jsonIn.active = id;
        });
    }
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
