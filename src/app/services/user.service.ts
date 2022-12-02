import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url2 = 'http://localhost:3000/yuva-api/users'

    constructor(private http: HttpClient) {

    }

    createUser(data: any) {
        return this.http.post(this.url2, data)
    }

    getUser(id: any) {
        return this.http.get(this.url2 + `/${id}`)
    }
}