import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupContractorService {
  url = 'http://localhost:3000/yuva-api/users'
  constructor(private http: HttpClient) { }

  getServices(){
    let header = new HttpHeaders().set('Type-content', 'application/json')

    return this.http.get(this.url, {
      headers: header
    });
    
  }

  updateUser(id:string, data:any){
    return this.http.put(this.url + "/" + id, data, { responseType: 'text'}).toPromise()
  }
}
