import { Injectable } from '@angular/core';
import { message } from '../mock/mock-msg';
import { Message } from '../../app/model/message';

@Injectable()
export class MessageServiceService {

  constructor() { }

  getMesssage(): Message {
    return message;
  }

}
