import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mycities } from './mycities/mycities.module';
import { myweather } from './myweather/myweather.module';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  sentname='';
  myname:String ='';
  Flag =0;
  id = 0;
  AllCities: mycities[] = [];
  Cities: mycities= {
    id: 0,
    name: '',
    Value: 0,
    WeatherText: '',
    logo: 0
  }
  
  constructor() { }
  Cityname: string;
  Backgroundcolor = 0;
  changeBackgroundcolor(){
    this.Backgroundcolor=1-this.Backgroundcolor;
  }

  UpdateAllcities(value, weathertext, logo, name){
    let k=0;
    this.Flag=0;
    this.CheckDuplicates(name);
    if(this.Flag==0){
          this.AllCities[this.id++] = {
          id: this.id,
          Value: value,
          WeatherText: weathertext,
          logo: logo,
          name: name
      }
    }
  }

  CheckDuplicates(name){
    this.sentname=name;
    this.AllCities.forEach(element => {
      if(element.name==name)
      {
        this.Flag=1;
        return false;
      }
    });
    return true;
  }
  GetAllcities(){
    return this.AllCities;
  }

  Delete(num){
    this.AllCities.splice(num,1);
  }
}
