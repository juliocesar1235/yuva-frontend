import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { IUser } from 'src/app/interfaces/user';
import { userKeys } from "../../models/common-keys"
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss'],
})
export class EmployeeProfileComponent implements OnInit {


  id: any;
  user!: IUser;
  service: any;
  date = new Date();
  formattedDob!: string | undefined;
  loadedData: boolean = false;
  loadedService: boolean = false;

  usersInfo = userKeys

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.loadUser()

  }


  loadUser() {
    console.log("getting user")
    this.http
      .get('http://localhost:3000/yuva-api/users/' + this.id)
      .subscribe((response) => {
        this.user = response as IUser;
        this.formattedDob = new Date(this.user.dateOfBirth || '').toLocaleDateString();
        this.loadedData = true;
        this.loadService(this.user.serviceId);
      }
      )

  }

  loadService(serviceId: string) {
    console.log("getting service,", serviceId)
    this.http
      .get("http://localhost:3000/yuva-api/services/" + serviceId)
      .subscribe((response) => {
        console.log("got service:", response)
        this.service = response;
        this.loadedService = true;
      })

  }
}
