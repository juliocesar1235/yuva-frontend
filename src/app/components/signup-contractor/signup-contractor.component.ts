import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { SignupContractorService } from '../../services/signup-contractor.service';

interface ContractorI{
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  zipcode: string;
  city: string;
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

    let newData:ContractorI = { 
      phoneNumber: data.phoneNumber,
      dateOfBirth: new Date(data.dob.year, data.dob.month - 1, data.dob.day).toISOString(),
      address: data.address,
      zipcode: data.zipcode,
      city: data.city
    }

    console.log(newData)

    this.signupcontractorservices.serveUser(newData).subscribe((result:any)=>{
      console.warn(result)
    })
  }

}
