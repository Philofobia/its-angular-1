import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}
  drink: any = {
    drinkIngr: [],
    drinkInstruction: [],
  };
  switchLanguage: boolean[] = []

  @ViewChild('drinkDescr') drinkDescrizione!: ElementRef;
  
  ngAfterViewInit = ():void => {
    // this.drinkDescrizione.nativeElement.textContent = this.drink.drinkInstruction[0].langDes;
  }
  changeSwitch = (input: number) => {
    for(let i = 0; i < this.drink.drinkInstruction.length; i++) {
      if(i === input) {
        this.switchLanguage[input] = true
      } else {
        this.switchLanguage[i] = false
      }
    }
    console.log(this.switchLanguage)
  } 
  changeLanguage = (input:number) => {
    this.drinkDescrizione.nativeElement.textContent = this.drink.drinkInstruction[`${input}`].langDes;
    this.changeSwitch(input)
  }

  handleMapping = ():void => {
    Object.keys(this.drink).forEach((key) => {
      if ( this.drink[key] === null) {}
      else if(key.startsWith('strIngredient')){
        const index:string = key.replace('strIngredient', '');
        this.drink.drinkIngr.push({
          name: this.drink[key],
          measure: this.drink[`strMeasure${index}`]
        })
      } else if (key.startsWith('strInstructions')) {
        let drinkLang:string = key.replace('strInstructions', '')
        if (drinkLang === "") {drinkLang = "EN"}
        this.drink.drinkInstruction.push({
          name: drinkLang,
          langDes: this.drink[key]
        })
      } 
    })
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDrink')!;
    this.httpClient
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe((response: any) => {
        this.drink = response.drinks[0];
        this.drink.drinkIngr = []
        this.drink.drinkInstruction = []
        this.handleMapping()
      })
  }
}

type drink = {
  drinkIngr: string[];
  drinkDosage: string[];
};
