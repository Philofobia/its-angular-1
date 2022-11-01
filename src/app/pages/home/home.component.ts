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
    //added a timeout to give time to the page
    //to register the new parameter from the route
    setTimeout(() => {
      const id: string | null = this.route.snapshot.paramMap.get('letterPag');
      if (id !== null) {
        this.apiService
          .getCocktailByFirstLetter(id)
          .subscribe((response: any) => {
            console.log(response.drinks)
            this.drinks = response.drinks;
            this.jsonIn.active = id;
          });
      }
    }, 0);
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
