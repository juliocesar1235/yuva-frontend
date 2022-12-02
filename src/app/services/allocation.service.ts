import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllocationService {
  url2 = 'http://localhost:3000/yuva-api/allocations'

  constructor(private http: HttpClient) { }

  createAllocation(data: any) {
    return this.http.post(this.url2, data)
}
}
