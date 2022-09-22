import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { PrivateMessage } from '../models/privateMessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrl = 'https://localhost:44348/api/';

  constructor(private httpClient: HttpClient) { }

  sendPrivateMessage(privateMessage: PrivateMessage):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"privatemessage/sendmessage",privateMessage)
  }
}