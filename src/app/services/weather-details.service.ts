import { Injectable } from '@angular/core';
import { weatherDetail } from '../mock/mock-weather-details';

@Injectable()
export class WeatherDetailsService {

  constructor() { }

  getWeatherDetail(){
     return weatherDetail;
  }

}
