import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {
  url = 'http://localhost:3000/yuva-api/services';
  constructor(private http: HttpClient) { 
    console.log('Servicieo arriba');
  }

  getServices(){
    let header = new HttpHeaders().set('Type-content', 'application/json')

    return this.http.get(this.url, {
      headers: header
    });
  }
}
