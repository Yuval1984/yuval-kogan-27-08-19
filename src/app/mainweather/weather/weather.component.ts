import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import * as jQuery from 'jquery';
import { myweather } from '../myweather/myweather.module';
import {error} from '../Error/error.module';
import {WeatherServiceService} from '../weather-service.service';
import { allResolved } from 'q';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  i=0;
  myerror=false;
  errormessage='';
  expression=true;
  click= 0;
  number= "215854";
  city= "Search A City";
  mycity="tel aviv";
  Key='1';
  apikey="23jANkQtcDxqjGF370sQjvAQsGdCBaDs";
  Error: error = {
    error:{
      Code: 0,
      Message: ''
    }
  };
  AllWeather2 = {} ;
  AllWeather1: myweather[][] = [];
    current_weather: myweather ={
    WeatherText: '',
    Value: 0,
    name: '',
    Key: '',
    LocalizedName: '',
    WeatherIcon: 0,
    AdministrativeArea: {
      ID: '',
      LocalizedName: ''
    },
     Temperature:{
      Imperial:{
        Unit: '',
        UnitType: 0,
        Value: 0
      },
      Metric:{
        Unit: '',
        UnitType: 0,
        Value: 0
      }
    },
    DailyForecasts:{
      Day:{
        Icon: '',
        IconPhrase: '',
      },
      Night:{
        Icon: '',
        IconPhrase: '',
      },
      Temperature:{
        Maximum:{
          Unit: '',
          Value: 0
        },
        Minimum:{
          Unit: '',
          Value: 0
        }
      }
    }
  }
    
  constructor(private http: HttpClient, private data: WeatherServiceService) {}

  changecity(city)
  {
    this.expression=true;
    if (this.checkexpression(city)!=false){
    this.mycity = city.toLowerCase();
    this.AllWeather1 = [];
    this.GetAutoCompleteSearchData(this.mycity,() => {
      this.GetOneWeatherData(this.current_weather.Key,() => {
        this.GetWeeklyWeatherData(this.current_weather.Key, () => {
        });
      });
    });
    }
    this.expression=false;
  }
  changecity1(city)
  {
    this.expression=true;
    if (this.checkexpression(city)!=false){
    this.mycity = city.toLowerCase();
    this.AllWeather1 = [];
    this.GetAutoCompleteSearchData(this.mycity,() => {
      this.GetOneWeatherData2(this.current_weather.Key,() => {
        this.GetWeeklyWeatherData(this.current_weather.Key, () => {
        });
      });
    });
    }
    this.expression=false;
  }

  checkexpression(data){
    return /^[a-zA-Z^\s]*$/.test(data);
  }

  updateNumber(mynumber){
    this.number = mynumber;
  }
  update(data)
  {
    this.current_weather=data;
  }

  Getinfo(){
    
    this.GetOneWeatherData(this.number,() => {
      this.GetWeeklyWeatherData(this.number, () => {
    });
  });
}

  GetWeeklyWeatherData(num,next){
    this.http.get<any>('http://dataservice.accuweather.com/forecasts/v1/daily/5day/'+num+'?apikey='+this.apikey+'&metric=true'
    ).subscribe(  result  => {
      this.AllWeather2 = result;
      next();
    })
  }

  GetWeeklyWeatherData1(num){
    this.http.get<any>('http://dataservice.accuweather.com/forecasts/v1/daily/5day/'+num+'?apikey='+this.apikey+'&metric=true'
    ).subscribe(  result  => {
      this.AllWeather2 = result;
    },error => {alert("City key Error or Bad Request");}
    )
  }

  GetOneWeatherData(num,next){
    this.http.get<any>('http://dataservice.accuweather.com/currentconditions/v1/'+num+'?apikey='+this.apikey+''
    ).subscribe(  result  => {
      this.AllWeather1.push(result);
      this.current_weather.Temperature=this.AllWeather1[1][0].Temperature;
      this.current_weather.WeatherIcon=this.AllWeather1[1][0].WeatherIcon;
      this.current_weather.WeatherText=this.AllWeather1[1][0].WeatherText;
      next();
    },error => {alert("City key Error or Bad Request");}
    )
  }
  GetOneWeatherData2(num,next){
    //let i = 0;
    this.http.get<any>('http://dataservice.accuweather.com/currentconditions/v1/'+num+'?apikey='+this.apikey+''
    ).subscribe(  result  => {
      this.AllWeather1.push(result);
      this.current_weather.Temperature.Metric.Value=this.AllWeather1[2][0].Temperature.Metric.Value;
      this.current_weather.WeatherIcon=this.AllWeather1[3][0].WeatherIcon;
      this.current_weather.WeatherText=this.AllWeather1[2][0].WeatherText;
      next();
    },error => {alert("City key Error or Bad Request");}
    )
  }

  GetOneWeatherData1(num){
    //let i = 0;
    this.http.get<any>('http://dataservice.accuweather.com/currentconditions/v1/'+num+'?apikey='+this.apikey+''
    ).subscribe(  result  => {
      this.AllWeather1.push(result);
      this.current_weather.Temperature=this.AllWeather1[1][0].Temperature;
      this.current_weather.WeatherIcon=this.AllWeather1[1][0].WeatherIcon;
      this.current_weather.WeatherText=this.AllWeather1[1][0].WeatherText;
    },error => {alert("City key Error or Bad Request");}
    )
  }

  GetAutoCompleteSearchData(city, next){
    this.http.get<any>('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='+this.apikey+'&q='+city
    ).subscribe(  result  => {
      this.AllWeather1.push(result);
      this.current_weather.Key=this.AllWeather1[0][0].Key;
      this.current_weather.AdministrativeArea=this.AllWeather1[0][0].AdministrativeArea;
      this.current_weather.LocalizedName=this.AllWeather1[0][0].LocalizedName;
      next();
    },error => {alert("City name Error or Bad Request");}
    )
  }

  GetAutoCompleteSearchData1(city){
    this.http.get<any>('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='+this.apikey+'&q='+city
    ).subscribe(  result  => {
      this.AllWeather1.push(result);
      this.current_weather.Key=this.AllWeather1[0][0].Key;
      this.current_weather.AdministrativeArea=this.AllWeather1[0][0].AdministrativeArea;
      this.current_weather.LocalizedName=this.AllWeather1[0][0].LocalizedName;
    },error => {alert("City key Error or Bad Request");}
    )
  }

  ConvertFileNumbertoString(filename) {
    return (/[^.]/.exec(filename));
  }

  logo(value){
    return "assets/"+value+".png";
  }

  clicked(){
    this.click=1;
  }
  unclicked(){
      this.click=0;
  }

  SendData(){
    this.clicked();
    setTimeout (() => {
      this.unclicked();
    }, 500);
    this.data.UpdateAllcities(this.AllWeather1[1][0].Temperature.Metric.Value, this.AllWeather1[1][0].WeatherText, this.AllWeather1[1][0].WeatherIcon, this.AllWeather1[0][0].LocalizedName);
    console.log("Flag= "+this.data.Flag);
    console.log("myname= "+this.data.myname);
    console.log("sentname= "+this.data.sentname);
  }

  ngOnInit() {
      if(this.data.Cityname!=null){
        this.changecity1(this.data.Cityname);
      }

    this.GetAutoCompleteSearchData(this.mycity,() => {
      this.GetOneWeatherData(this.number,() => {
        this.GetWeeklyWeatherData(this.number, () => {
        });
      });
    });
  }
}
