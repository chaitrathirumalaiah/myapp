import { Component, OnInit } from '@angular/core';
import { Message } from '../model/Message';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  message : Message = {
    msgID: 1,
    msg: 'Welcome To TCF Bank Customer Service Center',
    displayMsg :' Test'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
