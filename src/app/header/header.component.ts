import { Component, OnInit } from '@angular/core';
import { MonthServiceLevelService } from '../services/month-service-level.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[MonthServiceLevelService]
})

export class HeaderComponent implements OnInit {

  CurMonthSLObj :any;
  
  constructor(private monthServiceLevelService:MonthServiceLevelService) { }

  ngOnInit() {
    this.CurMonthSLObj = this.monthServiceLevelService.getMessMonthToDateServiceLevel();
  }

}
