import { Component, OnInit } from '@angular/core';
import { WeatherDetailsService } from '../services/weather-details.service';
import { WeatherDetail } from '../model/weather-detail';
@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css'],
  providers:[WeatherDetailsService]
})
export class WeatherDetailComponent implements OnInit {

  details : WeatherDetail[] = [];
  errorMsg: string;

  constructor(private weatherDetailsService:WeatherDetailsService) { }

  ngOnInit() {
    //  this.details =  this.weatherDetailsService.getWeatherDetail();


    this.weatherDetailsService.getWeatherDetail().subscribe((obj) => { 
      this.details = obj;       
    }, err  => this.errorMsg = <any>err);

  }

}
