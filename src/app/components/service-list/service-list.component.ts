import { Component, OnInit } from '@angular/core';
import { ServiceListService } from '../../services/service-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { ActivatedRoute, Router } from '@angular/router';
// import {GoogleSigninService } from '../../services/google-signin.service';
// import { GoogleLoginService } from 'src/app/services/google-login.service';
// import { IUserRes } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  public services: Array<any> = [];

  socialUser!: SocialUser;
  user:any;
  isLoggedin?: boolean = false
 

  constructor(
    private servicelistservices:ServiceListService,
    public activatedRoute: ActivatedRoute,
    private auth:AuthService,
    private router: Router,
    private http: HttpClient
    ) { 
    this.servicelistservices.getServices().subscribe((resp: any)=>{
      // console.log(resp)
      this.services = resp;
    })
  }

  favoriteEventListener(event:any){

    const [isFavorite, service] = event
    // si es favorito ir al arreglo y asegurarnos que esté
    let set = new Set(this.user.favoriteServices)
    if(isFavorite){
      set.add(service._id)      
    } else {
      
      set.delete(service._id)

    }
// lUgo hacer el put del usuario actualizado
    this.user.favoriteServices = [...set] 
    this.http.put('http://localhost:3000/yuva-api/users/' + this.user._id,{favoriteServices:this.user.favoriteServices})
  }

  loadUser(){
    console.log(this.user, "enontrado!")
    // this.user.favoriteServices??=[]
    // console.log(this.user.favoriteServices.includes("63466d59f5cea1401ec15dbc")," servicios favoritos")

    //obtener lo de localstorage
    }
    
    // // this.http
    // // .get('http://localhost:3000/yuva-api/users/' + this.socialUser.id)
    // // .subscribe((response) => {
    // //   this.user = response
    // //   console.log("servicelistuserloaded")
    // })
  

  ngOnInit(): void {
   console.log("USER DATA",this.auth.userData.yuva) 
  }

}
