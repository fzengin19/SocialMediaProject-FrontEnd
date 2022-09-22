import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserContact } from 'src/app/models/userContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  contacts:UserContact[]; 
  currentChat:UserContact;
  constructor(private contactService:ContactService,private toastrService :ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")!=null){
      this.getContacts(Number(localStorage.getItem("id")));
    }
  }
  getContacts(id:number){
    this.contactService.getContacts(id).subscribe(response => {
      this.contacts=response.data;
      response.data.forEach(contact => {
        this.toastrService.success(contact.contactName)
        
      });
    });
  }
  setCurrentChat(userContact: UserContact){
    this.currentChat=userContact;
    this.toastrService.success(userContact.contactName)
  }
  openChat(contactId:number){
    if(this.currentChat!=null){
      if(this.currentChat.contactId==contactId){
        return "list-group-item user list-group-item-action active text-dark rounded-0"
      }
       else{
        return "list-group-item user list-group-item-action text-dark rounded-0"
       }
    }
    else{
      return "list-group-item user list-group-item-action text-dark rounded-0"
    }
    }
}
