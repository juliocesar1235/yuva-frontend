import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceListService } from 'src/app/services/service-list.service';

@Component({
  selector: 'app-favorite-service',
  templateUrl: './favorite-service.component.html',
  styleUrls: ['./favorite-service.component.scss']
})
export class FavoriteServiceComponent implements OnInit {

  id: any;
  user: any;
  services: any;


  favoriteEventListener(event: any) {

    const [isFavorite, service] = event
    // si es favorito ir al arreglo y asegurarnos que esté
    let set = new Set(this.user.favoriteServices)
    if (isFavorite) {
      set.add(service._id)
    } else {

      set.delete(service._id)

    }
    // lUgo hacer el put del usuario actualizado
    this.user.favoriteServices = [...set]
    console.log("HACER PUT")
    this.http.put('http://localhost:3000/yuva-api/users/' + this.user._id, { favoriteServices: this.user.favoriteServices }).subscribe()
  }


  loadUser() {
    console.log("getting user")
    this.http
      .get('http://localhost:3000/yuva-api/users/' + this.id)
      .subscribe((response) => {
        //alert(JSON.stringify(response))
        this.user = response
        this.user["formattedDOB"] = new Date(this.user["dateOfBirth"]).toLocaleDateString()
        console.log(this.user)
        this.servicelistservices.getServices().subscribe((resp: any) => {
          // console.log(resp)
          this.services = resp.filter((service: any) => {
            return this.user.favoriteServices.includes(service._id)
          });

          console.log(this.services)
        })

      }
      )

  }


  constructor(private route: ActivatedRoute, private http: HttpClient, private servicelistservices: ServiceListService,
  ) {

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
    this.loadUser()
  }

}
