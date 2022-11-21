import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { SignupEmployeeService } from '../../services/signup-employee.service';

interface EmployeeI{
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  avatar: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  userType: string;
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

  constructor(private signupemployeeservices:SignupEmployeeService) { 
    this.signupemployeeservices.getServices().subscribe((resp: any)=>{
      this.pservices = resp;
    })
  }

  ngOnInit(): void {
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
    
    let newData:EmployeeI = { firstName: data.firstName,
      lastName: data.lastName,
      email: "fea@gmail.com",
      phoneNumber: data.phoneNumber,
      dateOfBirth: new Date(data.dob.year, data.dob.month - 1, data.dob.day).toISOString(),
      avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FPancho_Villa&psig=AOvVaw0O6piA2d_Psypb5HjvHrNx&ust=1665694588842000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDCm4TK2_oCFQAAAAAdAAAAABAD",
      address: data.address,
      zipcode: data.zipcode,
      city: data.city,
      country: "Mexico",
      userType: "employee",
      serviceCategory: this.selectedService,
      serviceId: this.selectedServiceID
    }

    console.log(newData)
    
    this.signupemployeeservices.serveUser(newData).subscribe((result)=>{
      console.warn(result)
    })
  }

}
