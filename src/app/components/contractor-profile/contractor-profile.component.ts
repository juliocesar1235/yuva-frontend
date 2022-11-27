import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { userKeys } from "../../models/common-keys"
@Component({
  selector: 'app-contractor-profile',
  templateUrl: './contractor-profile.component.html',
  styleUrls: ['./contractor-profile.component.scss']
})
export class ContractorProfileComponent implements OnInit {
  id: any;
  user: any;
  services: any;
  usersInfo = userKeys

  constructor(private http: HttpClient, private route: ActivatedRoute, public activatedRoute: ActivatedRoute) { }

  loadUser() {
    console.log("getting user")
    this.http
      .get('http://localhost:3000/yuva-api/users/' + this.id)
      .subscribe((response) => {
        this.user = response
        this.user["formattedDOB"] = new Date(this.user["dateOfBirth"]).toLocaleDateString()

        this.loadAllocations()

      }
      )
  }

  loadAllocations() {

    console.log("This user: ", this.user)
    console.log("getting service,", this.user.serviceId)
    this.http
      .get("http://localhost:3000/yuva-api/services")
      .subscribe((response) => {
        console.log("got service:", response)
        this.services = [response]

      })

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.loadUser()

  }

}
