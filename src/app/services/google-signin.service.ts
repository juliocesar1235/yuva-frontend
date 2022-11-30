import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {
  url2 = 'http://localhost:3000/yuva-api/users'

  constructor(private http: HttpClient) { 
    
  }

  serveUser(data:any){
    console.log("HEREEEEE")
    return this.http.post(this.url2, data)
  }
}
