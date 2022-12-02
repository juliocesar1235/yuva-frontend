import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  url2 = 'http://localhost:3000/yuva-api/users/login/'
  url= 'http://localhost:3000/yuva-api/users/'

  constructor(private http: HttpClient) { }

  serveUser(email:string){
    console.log("HEREEEEE")
    let header = new HttpHeaders().set('Type-content', 'application/json')
    return this.http.get(this.url2 + email, {
      headers: header
    });
  }

  getUser(userId:string){
    console.log("HEREEEEE")
    let header = new HttpHeaders().set('Type-content', 'application/json')
    return this.http.get(this.url + userId, {
      headers: header
    });
  }
}
