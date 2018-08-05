import { Injectable } from '@angular/core';
import {messMonthToDateServiceLevel} from '../mock/mock-month-to-date-service-level';


@Injectable()
export class MonthServiceLevelService {

  constructor() { }

  getMessMonthToDateServiceLevel(){
    return messMonthToDateServiceLevel;
  }

}
