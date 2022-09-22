import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { PrivateMessage } from '../models/privateMessage';
import { UserSearchModel } from '../models/userSearchModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44348/api/';

  constructor(private httpClient: HttpClient) { }

  search(SearchText:string ){
     return this.httpClient.post<ListResponseModel<UserSearchModel>>(this.apiUrl+"user/search?searchText="+SearchText,null)
  }
  
}