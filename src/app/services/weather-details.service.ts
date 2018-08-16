import { Injectable } from '@angular/core';
import { weatherDetail } from '../mock/mock-weather-details';



import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherDetailsService {

  constructor(private http: HttpClient) { }

 /* getWeatherDetail(){
     return weatherDetail;
  } */



  public getWeatherDetail(): Observable<any> {

    return this.http.get('assets/mock-json/mock-weather-details.json')
        .map((response: Response) => {               
                return response;
            }
        ).catch((e: any) => Observable.throw(this.errorHandler(e)));

 }


 errorHandler(error: any): void {
    console.log(error)
 }



}
