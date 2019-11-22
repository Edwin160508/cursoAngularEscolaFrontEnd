import { Post } from './../models/placeholder.posts.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  public getPostagens(): Observable<any>{
    return this.httpClient.get(`https://my-json-server.typicode.com/typicode/demo/posts`);
  }
}
