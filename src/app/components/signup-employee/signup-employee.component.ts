import { Component, OnInit } from '@angular/core';
import { SignupEmployeeService } from '../../services/signup-employee.service';

@Component({
  selector: 'app-signup-employee',
  templateUrl: './signup-employee.component.html',
  styleUrls: ['./signup-employee.component.scss']
})
export class SignupEmployeeComponent implements OnInit {

  public pservices: Array<any> = [];

  constructor(private signupemployeeservices:SignupEmployeeService) { 
    this.signupemployeeservices.getServices().subscribe((resp: any)=>{
      this.pservices = resp;
    })
  }

  ngOnInit(): void {
  }

  getUserFormData(data:{firstName: string, lastName: string, dateOfBirth: string, serviceCategory: string, address: string, city: string, zipcode: string, phoneNumber: string}){
    console.log(data)
    this.signupemployeeservices.serveUser(data).subscribe((result)=>{
      console.warn(result)
    })
  }

}
