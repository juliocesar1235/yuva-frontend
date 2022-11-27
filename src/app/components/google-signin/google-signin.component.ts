import { Component, OnInit,  VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { ActivatedRoute, Router } from '@angular/router';
import {GoogleSigninService } from '../../services/google-signin.service';
import { IUserRes } from '../../interfaces/user';

interface User{
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  country: string;
  userType: string;
}

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss']
})
export class GoogleSigninComponent implements OnInit {
  loginForm!: FormGroup;
  isLoggedin?: boolean = false
  user!: SocialUser;
  serviceData :string = "ok"

  tipouser = ''
  userResponse!:IUserRes;
  constructor(private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    public activatedRoute: ActivatedRoute,
    private signuS:GoogleSigninService,
    private router: Router) { 
    }

    ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe((params: any) => {
        console.log(params)
        this.tipouser = params.data
      })

      this.socialAuthService.authState.subscribe((user) => {
        this.user = user;
        this.isLoggedin = (user != null);
        let newData: User = { firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          avatar: user.photoUrl,
          country: "Mexico",
          userType: this.tipouser,
        }
        console.log(newData)
        this.signuS.serveUser(newData).subscribe((result: any)=>{
          console.log("REPONSEEEE", result)
          this.userResponse = result

          if(this.tipouser == 'employee'){
            this.router.navigate(['employee/signup'], {queryParams:{data: this.userResponse.insertedId}})
          }else{
            this.router.navigate(['contractor/signup'], {queryParams:{data: this.userResponse.insertedId}})
            
          }

        })
        
      });
    
    }
  
    loginWithGoogle(): void {
      // console.log(this.myNameElem.nativeElement.getElementsByTagName("IFRAME")[0].getAttribute('src'))
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) =>{
        // this.sendToRestApiMethod(userData.token)
        let newData: User = { firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          avatar: userData.photoUrl,
          country: "Mexico",
          userType: this.tipouser,
        }
        this.signuS.serveUser(newData)

        if(this.tipouser == 'employee'){
          this.router.navigate(['employee/signup'], {queryParams:{data: newData.email}})
        }else{
          this.router.navigate(['contractor/signup'], {queryParams:{data: newData.email}})
          
        }
      })
      
    }

    logOut(): void {
      this.socialAuthService.signOut();
    }

}
