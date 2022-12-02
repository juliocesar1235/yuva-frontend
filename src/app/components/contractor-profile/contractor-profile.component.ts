import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { userKeys } from "../../models/common-keys"
import { IAllcoations } from "../../interfaces/allocations"
import { IUser } from 'src/app/interfaces/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contractor-profile',
  templateUrl: './contractor-profile.component.html',
  styleUrls: ['./contractor-profile.component.scss']
})
export class ContractorProfileComponent implements OnInit {
  id: any;
  user!: IUser;
  services: any;
  usersInfo = userKeys
  formattedDob!: string | undefined;
  loadedData: boolean = false;
  allocations: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("yuva")
    this.loadedData = false;
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
        this.loadAllocations()
      }
      )
  }

  loadAllocations() {

    console.log("This user: ", this.id)
    console.log("getting suerType,", this.user.userType)
    console.log("http://localhost:3000/yuva-api/allocations/history/" + this.id + "/" + this.user.userType)
    this.http
      .get("http://localhost:3000/yuva-api/allocations/history/" + this.id + "/" + this.user.userType)
      .subscribe((response) => {
        this.allocations = response
        this.loadServiceInfor()
      })
  }

  loadServiceInfor() {
    this.allocations.forEach((allocation: IAllcoations) => {
      this.http
        .get("http://localhost:3000/yuva-api/services/" + allocation.serviceId)
        .subscribe((response) => {
          this.services = [response]
        })
    });


  }

}
