import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetContactModel } from '../models/getContactModel';
import { ListResponseModel } from '../models/listResponseModel';
import { UserContact } from '../models/userContact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiUrl = 'https://localhost:44348/api/usercontact/';
  constructor(private httpClient: HttpClient) {}

  getContacts(id: number) {
    return this.httpClient.post<ListResponseModel<UserContact>>(
      this.apiUrl + 'getcontacts?id='+id,
      id
    );
  }  
}
