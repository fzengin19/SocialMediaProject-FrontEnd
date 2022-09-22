import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { PrivateMessage } from '../models/privateMessage';
import * as signalR from "@microsoft/signalr";


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url="/Chat"
  private connection= new signalR.HubConnectionBuilder().withUrl(this.url).build();
  apiUrl = 'https://localhost:44348/api/';

  privateMessage :PrivateMessage;
  
  constructor(private httpClient: HttpClient) {
    // this.connection.on("ReceivePrivateMessage",(privateMessage:PrivateMessage)=>{
    //   this.privateMessage=privateMessage;
    // })
    // this.connection.start().catch((err) => document.write(err));
   }

  sendPrivateMessage(privateMessage: PrivateMessage):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"privatemessage/sendmessage",privateMessage)
  }

  takePrivateMessage(privateMessage:PrivateMessage){
    this.privateMessage=privateMessage;
  }
  


}
