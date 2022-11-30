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

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  public services: Array<any> = [];

  user!: SocialUser;
  isLoggedin?: boolean = false

  constructor(
    private servicelistservices:ServiceListService,
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    public activatedRoute: ActivatedRoute,
    private loginS: GoogleLoginService,
    private router: Router
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

  ngOnInit(): void {

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      //637ae8121e9375a11cd42ea6
      this.isLoggedin = (user != null);

      // this.loginS.serveUser(user.email).subscribe((result: any)=>{

      //   if(result.userType == 'employee'){
        
      //     this.router.navigate(['/profile/employee/' + result._id], {queryParams:{data: result._id}})
      //   }else{
      //     this.router.navigate(['/profile/contractor/' + result._id], {queryParams:{data: result._id}})    
      // }
      // }) 

      // this.user
      console.log(this.user)
    });
  }

}
