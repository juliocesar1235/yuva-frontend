import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { SignupEmployeeService } from '../../services/signup-employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserRes } from '../../interfaces/user'

interface EmployeeI{
  phoneNumber: string;
  dateOfBirth: Date;
  address: string;
  zipcode: string;
  city: string;
  serviceCategory: string;
  serviceId: string;
}


@Component({
  selector: 'app-signup-employee',
  templateUrl: './signup-employee.component.html',
  styleUrls: ['./signup-employee.component.scss']
})

export class SignupEmployeeComponent implements OnInit {

  public pservices: Array<any> = [];
  userID!:string;
  userResponse!:IUserRes;

  constructor(private signupemployeeservices:SignupEmployeeService, public activatedRoute: ActivatedRoute, private router: Router) { 
    this.signupemployeeservices.getServices().subscribe((resp: any)=>{
      this.pservices = resp;
    })
  }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe((params: any) => {
    //   this.userID = params.data
    // })
  }
  
  selectedService = '';
  selectedServiceID = '';
	onSelected(service:any):void {
    console.log(service)
    const cosa = service.target.options;
    const index = cosa.selectedIndex;
		this.selectedService = cosa[index].text;
    this.selectedServiceID = cosa[index].value;
	}

  getUserFormData(data:{firstName: string, lastName: string, dob: NgbDate, serviceCategory: string, address: string, city: string, zipcode: string, phoneNumber: string}){
    
    this.userID = localStorage.getItem("yuva")!;
    let newData:EmployeeI = {
      phoneNumber: data.phoneNumber,
      dateOfBirth: new Date(data.dob.year, data.dob.month - 1, data.dob.day),
      address: data.address,
      zipcode: data.zipcode,
      city: data.city,
      serviceCategory: this.selectedService,
      serviceId: this.selectedServiceID
    }

    console.log("AAAAAAAA", this.userID)
    
    this.signupemployeeservices.updateUser(this.userID, newData).then((result:any)=>{
      this.userResponse = result
      this.router.navigate(['/profile/employee/' + this.userID], {queryParams:{data: this.userID}})
    })
  }

}
