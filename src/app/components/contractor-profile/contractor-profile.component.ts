import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { userKeys } from "../../models/common-keys"
import {IAllcoations} from "../../interfaces/allocations"
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
  allocations: any;

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

    console.log("This user: ", this.id)
    console.log("getting suerType,", this.user.userType)
    console.log("http://localhost:3000/yuva-api/allocations/history/" +this.id + "/"+this.user.userType)
    this.http
      .get("http://localhost:3000/yuva-api/allocations/history/" +this.id + "/"+this.user.userType)
      .subscribe((response) => {
        console.log("got RESPUESTAAA", response)
        this.allocations = response
        this.loadServiceInfor()
        console.log("HERE")
      })
  }

  loadServiceInfor(){
    this.allocations.forEach((allocation: IAllcoations) => {
      console.log("ID", allocation)
      this.http
      .get("http://localhost:3000/yuva-api/services/" + allocation.serviceId)
      .subscribe((response) => {
        this.services = [response]
      })
    });

    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.loadUser()

  }

}
