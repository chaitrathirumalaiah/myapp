import { Component, OnInit } from '@angular/core';
import { MonthServiceLevelService } from '../services/month-service-level.service';
import { messMonthToDateServiceLevel } from '../mock/mock-month-to-date-service-level';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[MonthServiceLevelService]
})

export class HeaderComponent implements OnInit {

  CurMonthSLObj:any;
  errorMsg: string;

  constructor(private monthServiceLevelService:MonthServiceLevelService) { }

  ngOnInit() {
   // this.CurMonthSLObj = this.monthServiceLevelService.getMessMonthToDateServiceLevel();
  
     this.monthServiceLevelService.getMessMonthToDateServiceLevel().subscribe((obj) => { 
      this.CurMonthSLObj = obj[0];       
    }, err  => this.errorMsg = <any>err);
     
  }

}
