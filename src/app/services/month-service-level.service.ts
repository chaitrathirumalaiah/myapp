import { Injectable } from '@angular/core';
import {messMonthToDateServiceLevel} from '../mock/mock-month-to-date-service-level';
 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class MonthServiceLevelService {

  constructor(private http: HttpClient) { }

  /*getMessMonthToDateServiceLevel(){
    return messMonthToDateServiceLevel;
  }*/




  public getMessMonthToDateServiceLevel(): Observable<any> {

    return this.http.get('assets/mock-json/monthServiceTodateLevel.json')
        .map((response: Response) => {               
                return response;
            }
        ).catch((e: any) => Observable.throw(this.errorHandler(e)));

 }


 errorHandler(error: any): void {
    console.log(error)
 }


}
