import { Component, OnInit } from '@angular/core';
import { Message } from '../model/Message';
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[MessageServiceService]
})
export class FooterComponent implements OnInit {

  message : Message = {
    msgID: 0,
    msg: '',
    displayMsg :' '
  };
  
  constructor(private _messageServiceService:MessageServiceService) { }

  ngOnInit() {
    this.message = this._messageServiceService.getMesssage();
  }

}
