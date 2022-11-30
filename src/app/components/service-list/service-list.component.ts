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
import { GoogleLoginService } from 'src/app/services/google-login.service';
import { IUserRes } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';

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
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    public activatedRoute: ActivatedRoute,
    private loginS: GoogleLoginService,
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
    if(isFavorite){
      2
    } else {
      // 
    }
// lUgo hacer el put del usuario actualizado
  }

  loadUser(){
    this.loginS.serveUser(this.socialUser.email).subscribe((response) => {this.user = response
    console.log(this.user, "enontrado!")
    this.user.favoriteServices??=["63466d59f5cea1401ec15dbc"]
    console.log(this.user.favoriteServices.includes("63466d59f5cea1401ec15dbc")," servicios favoritos")
    })
    
    // // this.http
    // // .get('http://localhost:3000/yuva-api/users/' + this.socialUser.id)
    // // .subscribe((response) => {
    // //   this.user = response
    // //   console.log("servicelistuserloaded")
    // })
  }

  ngOnInit(): void {

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      //637ae8121e9375a11cd42ea6
      this.isLoggedin = (user != null);
      this.loadUser()

      // this.loginS.serveUser(user.email).subscribe((result: any)=>{

      //   if(result.userType == 'employee'){
        
      //     this.router.navigate(['/profile/employee/' + result._id], {queryParams:{data: result._id}})
      //   }else{
      //     this.router.navigate(['/profile/contractor/' + result._id], {queryParams:{data: result._id}})    
      // }
      // }) 

      // this.user
      console.log(this.socialUser)
      console.log(this.services)
    });
  }

}
