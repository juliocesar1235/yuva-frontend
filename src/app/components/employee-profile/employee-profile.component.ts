import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  id: any;
  users: any;
  user: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    alert(JSON.stringify(this.users))
    this.loadUser()

  }

  loadUser() {
    console.log("getting user")
    this.http
      .get('http://localhost:3000/yuva-api/users')
    .subscribe((response) =>{
      alert(JSON.stringify(response))
      this.users = response
    }
    )

  }
  // constructor(private route: ActivatedRoute) { }

  // ngOnInit(): void {

  //   // get route from router and get parameter with paramMap
  //   this.id = this.route.snapshot.paramMap.get('id')

  //   //hacer un get al backend con este id de ususario


  // }

  ngOnInit(): void {
    this.loadUser()
    this.id = this.route.snapshot.paramMap.get('id')
    this.user = this.users.find((user:any) =>
      user["_id"] === this.id
    )
    console.log("user:", this.user)
  }

}
