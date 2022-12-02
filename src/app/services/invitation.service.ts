import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  url = "http://localhost:3000/yuva-api/invitations/"

  constructor(private http: HttpClient) { }
  updateInvitation(id: string, data: any) {
    return this.http.put(this.url + "/" + id, data, { responseType: 'text' });
  }
}
