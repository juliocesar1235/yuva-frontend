import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite-service',
  templateUrl: './favorite-service.component.html',
  styleUrls: ['./favorite-service.component.scss']
})
export class FavoriteServiceComponent implements OnInit {

  id: any;
  user: any;
  services: any;


  loadUser() {
    console.log("getting user")
    this.http
      .get('http://localhost:3000/yuva-api/users/' + this.id)
      .subscribe((response) => {
        //alert(JSON.stringify(response))
        this.user = response
        this.user["formattedDOB"] = new Date(this.user["dateOfBirth"]).toLocaleDateString()


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
        this.services = [response]

      })

  }
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
  }

}
