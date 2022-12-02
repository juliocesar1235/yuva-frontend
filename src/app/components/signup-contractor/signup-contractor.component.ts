import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { SignupContractorService } from '../../services/signup-contractor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserRes } from '../../interfaces/user'

interface ContractorI{
  phoneNumber: string;
  dateOfBirth: Date;
  address: string;
  zipcode: string;
  city: string;
}

// interface IuserRes{
//   acknowledged: boolean;
//   insertedId: string;
// }

@Component({
  selector: 'app-signup-contractor',
  templateUrl: './signup-contractor.component.html',
  styleUrls: ['./signup-contractor.component.scss']
})
export class SignupContractorComponent implements OnInit {
  userID!:string;
  // userData!:object;
  userResponse!:IUserRes;


  // public userData: Array<any> = [];

  constructor(private signupcontractorservices:SignupContractorService, public activatedRoute: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe((params: any) => {
    //   console.log("PARAMMMMSSSS", JSON.stringify(params.data))
    //   this.userID = params.data
    // })

    // this.signupcontractorservices.getServices().subscribe((resp: any)=>{
    //   this.userData = resp;
    // })
  }
  getUserFormData(data:{firstName: string, lastName: string, dob: NgbDate, serviceCategory: string, address: string, city: string, zipcode: string, phoneNumber: string}){

    this.userID = localStorage.getItem("yuva")!;

    let newData:ContractorI = { 
      phoneNumber: data.phoneNumber,
      dateOfBirth: new Date(data.dob.year, data.dob.month - 1, data.dob.day),
      address: data.address,
      zipcode: data.zipcode,
      city: data.city
    }
    console.log("AAAAAAAA", this.userID)
    this.signupcontractorservices.updateUser(this.userID, newData).then((result:any) =>{
      // const indexToUpdate = 
      // if(indexToUpdate > -1){
      //   this.userData[indexToUpdate] = newData;
      // }
      // console.log(result)
      // this.router.navigate(['employee/signup'], {queryParams:{data: newData.email}})
      this.userResponse = result
      console.log("cosaaaaaaaaaaaaaaa ", 'profile/contractor/' + this.userID)
      this.router.navigate(['/profile/contractor/' + this.userID], {queryParams:{data: this.userID}})
    }) 
  }

}
