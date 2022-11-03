import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contractor-profile',
  templateUrl: './contractor-profile.component.html',
  styleUrls: ['./contractor-profile.component.scss']
})
export class ContractorProfileComponent implements OnInit {
  id: any;
  user: any;
  service: any;
  usersInfo = [{
    propertyName: "firstName",
    label: "Nombre"
  },
  {
    propertyName: "lastName",
    label:"Apellido"
  },   
  {
    propertyName: "email",
    label:"Email"
  },

  {
    propertyName: "phoneNumber",
    label:"Teléfono"
  },
  {
    propertyName: "dateOfBirth",
    label:"Fecha nacimiento"
  },
  {
    propertyName: "address",
    label:"Dirección"
  },
  {
    propertyName: "zipcode",
    label:"Código Postal"
  },
  {
    propertyName: "country",
    label:"País"
  },
  {
    propertyName: "city",
    label:"Ciudad"
  },
  {
    propertyName: "userType",
    label:"Perfil"
  },
  {
    propertyName: "serviceCategory",
    label:"Categoría"
  }
];

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  loadUser(){
    console.log("getting user")
    this.http
      .get('http://localhost:3000/yuva-api/users/' + this.id)
      .subscribe((response) => {
        this.user = response
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
    console.log("user:", this.user)
  }

}
