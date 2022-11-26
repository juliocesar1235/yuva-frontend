import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { userKeys } from "../../models/common-keys"
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss'],
})
export class EmployeeProfileComponent implements OnInit {


  id: any;
  user: any;
  service: any;
  date = new Date();

  usersInfo = userKeys

  constructor(private http: HttpClient, private route: ActivatedRoute) {



  }

  loadUser() {
    console.log("getting user")
    this.http
      .get('http://localhost:3000/yuva-api/users/' + this.id)
      .subscribe((response) => {
        //alert(JSON.stringify(response))
        this.user = response
        this.user["formattedDOB"] = new Date(this.user["dateOfBirth"]).toLocaleDateString()


        this.loadService()

      }
      )

  }

  loadService() {
    console.log("getting service,", this.user.serviceId)
    this.http
      .get("http://localhost:3000/yuva-api/services/" + this.user.serviceId)
      .subscribe((response) => {
        console.log("got service:", response)
        this.service = response

      })

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.loadUser()

  }

}
