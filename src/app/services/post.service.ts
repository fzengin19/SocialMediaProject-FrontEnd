import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { PostModel } from '../models/postModel';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'https://localhost:44348/api/post/';
  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.post<ListResponseModel<PostModel>>(
      this.apiUrl + 'getposts?id='+localStorage.getItem("id"),
      localStorage.getItem("id")
    );
  }



  
}
