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
  users = [{ "_id": "63472915dd31975d78ac0329", "firstName": "Julio", "lastName": "Gutierrez", "email": "a01282575@tec.mx", "phoneNumber": "8181383031", "dateOfBirth": "1999-08-08T00:00:00.000Z", "avatar": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fes%2Favatar-png%2Fdownload%2F95453&psig=AOvVaw1Y90Gz2JqmJvfRrXZrBojp&ust=1665693872093000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCggbDH2_oCFQAAAAAdAAAAABAS", "address": "reino de anahuac 104", "zipcode": "66455", "city": "Monterrey", "country": "Mexico", "idProvider": "google" }, { "_id": "63472a3fdd31975d78ac032a", "firstName": "Pancho", "lastName": "Villa", "email": "mex@gmail.com", "phoneNumber": "81929299", "dateOfBirth": "1878-05-05T00:00:00.000Z", "avatar": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FPancho_Villa&psig=AOvVaw0O6piA2d_Psypb5HjvHrNx&ust=1665694588842000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDCm4TK2_oCFQAAAAAdAAAAABAD", "address": "Parral", "zipcode": "56055", "city": "Parral", "country": "Mexico", "idProvider": "google" }]
  user: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    alert(JSON.stringify(this.users))
    this.loadUser()

  }

  loadUser() {
    console.log("getting user")
    this.http
      .get('http://localhost:3000/yuva-api/users')
    // .subscribe((response) =>{
    //   alert(JSON.stringify(response))
    // },
    // (error) => {
    //   alert(JSON.stringify(error))
    // }
    // )

  }
  // constructor(private route: ActivatedRoute) { }

  // ngOnInit(): void {

  //   // get route from router and get parameter with paramMap
  //   this.id = this.route.snapshot.paramMap.get('id')

  //   //hacer un get al backend con este id de ususario


  // }

  ngOnInit(): void {
    this.loadUser()
    this.id = this.route.snapshot.paramMap.get('id')
    this.user = this.users.find((user) =>
      user["_id"] === this.id
    )
    console.log("user:", this.user)
  }

}
