import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from './weather-service.service';

@Component({
  selector: 'app-mainweather',
  templateUrl: './mainweather.component.html',
  styleUrls: ['./mainweather.component.css']
})
export class MainweatherComponent implements OnInit {

  constructor(private data: WeatherServiceService) { }

  ngOnInit() {
  }

}
