import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupContractorService {
  url = 'http://localhost:3000/yuva-api/users'
  constructor(private http: HttpClient) { }

  serveUser(data:any){
    return this.http.put(this.url, data)
  }
}
