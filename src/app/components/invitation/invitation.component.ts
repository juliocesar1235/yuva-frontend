import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { InvitationService } from 'src/app/services/invitation.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
  url = "http://localhost:3000/yuva-api/invitations/"
  id: any;
  decisionClicked:boolean = false;
  invitationDecided: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient, public invi: InvitationService) { }
  invitation: any;
  loadInvitation() {
    this.http
      .get(this.url + this.id)
      .subscribe((response) => {
        console.log("got RESPUESTAAA", response)
        this.invitation = response
        // this.loadServiceInfor()
        // console.log("HERE")
      })

  }

  acceptInvitation() {
    this.invi.updateInvitation(this.id, {
      inviteConfirmation: "accepted",
      allocationId: this.invitation.allocationId,
      employeeId: this.invitation.employeeId
    }).subscribe((result) => {
      console.log('updated invitation')
      this.decisionClicked = true;
      alert("Tu respuesta fue enviada");
    });
  }

  rejectInvitation() {
    this.invi.updateInvitation(this.id, {
      inviteConfirmation: "rejected",
      allocationId: this.invitation.allocationId,
      employeeId: this.invitation.employeeId
    }).subscribe((result) => {
      console.log('updated invitation')
      this.decisionClicked = true;
      alert("Tu respuesta fue enviada");
      
    });
    
  }
  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
    this.loadInvitation()
  }

}
