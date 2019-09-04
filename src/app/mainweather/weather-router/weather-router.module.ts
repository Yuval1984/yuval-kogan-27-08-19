import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { WeatherComponent } from '../weather/weather.component';
import { FavoritesComponent } from '../favorites/favorites.component';


export const appRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'Favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: []
})
export class WeatherRouterModule { }
