import { Component, OnInit } from '@angular/core';
import { mycities } from '../mycities/mycities.module';
import { myweather } from '../myweather/myweather.module';
import {WeatherServiceService} from '../weather-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  AllCities1: mycities[] = [];
    current_weather: mycities ={
    id: 0,
    name: '',
    Value : 0,
    WeatherText:'',
    logo: 0
  };

  delete(num): void {
    for(let i = 0; i < this.AllCities1.length; i++ )
      if( this.AllCities1[i].id == num )
      {
        this.AllCities1.splice(i,1);
        break;
      }
    }
  logo(value){
    return "assets/"+value+".png";
  }

  constructor(private data: WeatherServiceService) {
    this.AllCities1 = this.data.GetAllcities();
  }

  ngOnInit() {
   
  }

}
