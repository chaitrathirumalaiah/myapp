import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  CurMonthSLObj = [
    {
        "sort": 7,
        "grpName": "CurMonthSL",
        "sl": 40.45,
        "ali": 0,
        "avl": 0,
        "nr": 0,
        "lcq": "0",
        "rts": 1533135355667,
        "ciq": 0
    }
]; 
  constructor() { }

  ngOnInit() {
  }

}
