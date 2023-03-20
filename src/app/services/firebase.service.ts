import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url  = 'https://my-angular-project-ba96f-default-rtdb.firebaseio.com/';
  
  //DI
  constructor(private httpClient: HttpClient) { }

  createPost(){
    let postData= {
      title: 'This is Firebase example',
      content: 'We are calling Angular Post Method'
    }
    return this.httpClient.post(this.url + 'posts.json', postData);  
  }
}
