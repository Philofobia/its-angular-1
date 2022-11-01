import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DrinkComponent } from './pages/drink/drink.component'
import { SearchDoubleComponent } from './pages/SearchDouble/searchDouble.component';
import { SearchComponent } from './pages/Search/search.component';
import { IngredientComponent } from './pages/Ingredient/ingredient.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:letterPag', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'drink/:idDrink', component: DrinkComponent },
  { path: 'search', component: SearchComponent },
  { path: 'ingredient/:nameIng', component: IngredientComponent },
  { path: 'doubleSearch', component: SearchDoubleComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
