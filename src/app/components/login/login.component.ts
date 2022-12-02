import { Component, OnInit } from '@angular/core';
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
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoggedin?: boolean = false
  user!: SocialUser;
  userResponse!:IUserRes;

  constructor(private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    public activatedRoute: ActivatedRoute,
    private loginS:GoogleLoginService,
    private router: Router,
    private auth:AuthService) { }

  ngOnInit(): void {
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
    //   //637ae8121e9375a11cd42ea6
    //   this.isLoggedin = (user != null);

    //   this.loginS.serveUser(user.email).subscribe((result: any)=>{

    //     if(result.userType == 'employee'){
        
    //       this.router.navigate(['/profile/employee/' + result._id], {queryParams:{data: result._id}})
    //     }else{
    //       this.router.navigate(['/profile/contractor/' + result._id], {queryParams:{data: result._id}})    
    //   }
    //   }) 
    // });
  }
  userData: any;
  getUserFormData(data: {email:string, password: string}){
    console.log("DATAAA", data)
    this.auth.SignIn(data.email, data.password);
  }
}
