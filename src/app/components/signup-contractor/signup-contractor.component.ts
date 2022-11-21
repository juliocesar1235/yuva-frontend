import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { SignupContractorService } from '../../services/signup-contractor.service';

interface ContractorI{
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
}

@Component({
  selector: 'app-signup-contractor',
  templateUrl: './signup-contractor.component.html',
  styleUrls: ['./signup-contractor.component.scss']
})
export class SignupContractorComponent implements OnInit {

  constructor(private signupcontractorservices:SignupContractorService) { 
  }

  ngOnInit(): void {
  }
  getUserFormData(data:{firstName: string, lastName: string, dob: NgbDate, serviceCategory: string, address: string, city: string, zipcode: string, phoneNumber: string}){

    let newData:ContractorI = { firstName: data.firstName,
      lastName: data.lastName,
      email: "fea@gmail.com",
      phoneNumber: data.phoneNumber,
      dateOfBirth: new Date(data.dob.year, data.dob.month - 1, data.dob.day).toISOString(),
      avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FPancho_Villa&psig=AOvVaw0O6piA2d_Psypb5HjvHrNx&ust=1665694588842000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDCm4TK2_oCFQAAAAAdAAAAABAD",
      address: data.address,
      zipcode: data.zipcode,
      city: data.city,
      country: "Mexico",
      userType: "contractor"
    }

    console.log(newData)

    // this.signupcontractorservices.serveUser(newData).subscribe((result:any)=>{
    //   console.warn(result)
    // })
  }

}
