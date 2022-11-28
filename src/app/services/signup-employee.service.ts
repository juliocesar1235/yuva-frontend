import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupEmployeeService {
  url = 'http://localhost:3000/yuva-api/services';
  url2 = 'http://localhost:3000/yuva-api/users'
  constructor(private http: HttpClient) { 
    console.log('Servicieo arriba');
  }


  getServices(){
    let header = new HttpHeaders().set('Type-content', 'application/json')

    return this.http.get(this.url, {
      headers: header
    });
    
  }
  
  updateUser(id:string, data:any){
    return this.http.put(this.url2 + "/" + id, data, { responseType: 'text'}).toPromise()
  }

}
