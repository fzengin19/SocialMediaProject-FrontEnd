import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { UserDetail } from '../models/userDetail';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  apiUrl = 'https://localhost:44348/api/userdetail/';
  constructor(private httpClient: HttpClient) {}

  update(userDetail:UserDetail){
    return this.httpClient.post<ResponseModel>(this.apiUrl + "update",userDetail);
  }

  add(userDetail:UserDetail){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",userDetail);
  }
  
  updateProfilePictures(image:File,userDetailId:number){
    const formData = new FormData();
    formData.append("image",image);
    formData.append("userDetailId",userDetailId.toString());
    return this.httpClient.post<ResponseModel>(this.apiUrl + "updatepp", formData);
  }

}