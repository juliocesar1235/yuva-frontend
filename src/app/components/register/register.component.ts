import { Component, OnInit, VERSION, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { DataShareService } from 'src/app/services/data-share.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StringFormat } from '@angular/fire/compat/storage/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  
})
export class RegisterComponent implements OnInit {
  // loginForm!: FormGroup;
  // // socialUser!: SocialUser;
  // isLoggedin?: boolean = false
  // user!: SocialUser;
  message!:string;

  // @ViewChild('yuverobtn') myNameElem!: ElementRef<HTMLButtonElement>;
  // @ViewChild('clientebtn') clienteb!: ElementRef<HTMLButtonElement>;


  constructor(
    // private formBuilder: FormBuilder,
    // private socialAuthService: SocialAuthService,
    private data: DataShareService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { 
    
  }

  ngOnInit(): void {
    // this.data.currentMessage.subscribe(message => this.message = message);
  }

  // navigateWithState() {
    
  // }

  loginWithGoogleYuvero(): void {

    // this.router.navigateByUrl('/googleSignIn', { state: { userT: 'Yuvero' } });
    // this.router.navigate(['/googleSignIn', 'Yuvero'])
    this.router.navigate(['/googleSignIn'], {queryParams:{data: 'employee'}})

    
  }

  loginWithGoogleCliente(): void {

    this.router.navigate(['/googleSignIn'], {queryParams:{data: 'contractor'}})
  }

  getUserFormData(data:{email:string, password: string, serviceCategory: string}){
    this.auth.SignUp(data.email, data.password)
  }

}
