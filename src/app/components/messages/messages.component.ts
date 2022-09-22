import { Component, OnInit } from '@angular/core';
import { PrivateMessage } from 'src/app/models/privateMessage';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  lastMessage:PrivateMessage;
  
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {

  }

  takeMessage(){
    var x = ''
    if(this.messageService.privateMessage!=this.lastMessage&& this.lastMessage!=null){
      const m = document.createElement("div");
      m.innerHTML='asdfasdf';
    }

  }

  sendMessage(){
    var privateMessage:PrivateMessage;
    privateMessage.senderName=localStorage.getItem("firstName")+" "+localStorage.getItem("lastName");
    privateMessage.message=document.getElementById("messagearea").nodeValue;
    this.messageService.sendPrivateMessage(privateMessage);
  }

}
