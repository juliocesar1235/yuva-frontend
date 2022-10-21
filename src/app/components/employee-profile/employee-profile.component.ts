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
  users = []

  constructor(private http: HttpClient){}

  loadUser(){
    this.http
    .get('mongodb://mongo:27017/yuva')
    .subscribe((users) =>{
      alert(JSON.stringify(users));
    },
    (error) => {
      alert(JSON.stringify('ERROR' + error));
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
      
  }

}
