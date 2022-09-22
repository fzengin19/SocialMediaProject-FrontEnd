import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrivateMessage } from 'src/app/models/privateMessage';
import { UserContact } from 'src/app/models/userContact';
import { MessageService } from 'src/app/services/message.service';
import { ContactService } from 'src/app/services/contact.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userName:string;
  message: PrivateMessage;
  
  constructor( private messageService:MessageService ,private toastrService:ToastrService, private router :Router, private contactService:ContactService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")!=null){
      console.log(Number(localStorage.getItem("id")));

     this.userName=localStorage.getItem("firstName")+" "+localStorage.getItem("lastName");
    }
  }

  sendPrivateMessage(){
    var text:string = (<HTMLInputElement>document.getElementById("message")).value
    var message:PrivateMessage;
    //this.toastrService.success(Date.now)
    this.messageService.sendPrivateMessage(message).subscribe(response => {
      return true
    },responseError=>{
      this.toastrService.error(responseError.message)
      return false
    });
  }
 
   

}
