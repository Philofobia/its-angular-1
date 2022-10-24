import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  nameIng: string = '';
  sameIngrDrinks: any[] = [];

  ngOnInit() {
    this.nameIng = this.route.snapshot.paramMap.get('nameIng')!;
    this.apiService.getCocktailByIngr(this.nameIng).subscribe((response: any) => {
      this.sameIngrDrinks = response.drinks;
    });
  }
}
