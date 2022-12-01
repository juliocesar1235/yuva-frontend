import { Injectable, NgZone } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { LoginData } from '../interfaces/login-data';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GoogleSigninService } from './google-signin.service';
import { IUser } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  userType!: any;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private http: HttpClient,
    private signInS: GoogleSigninService,
    private userService: UserService,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.afAuth.setPersistence('local').then(() => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          // this.SaveUserWithFirebase(result.user);
          console.log("login data", result.user)
          this.afAuth.authState.subscribe((user) => {
            // if (user) {
            //   this.userType = this.getUserType(user);
            //   this.router.navigate(['dashboard']);
            // }
          });
        })
        .catch((error) => {
          window.alert(error.message);
        });
    })

  }

  SignUp(email: string, password: string, userT: string, firstName: string, lastName: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (userT == "employee") {
          this.userService.createUser({
            firstName: firstName,
            lastName: lastName,
            email: result.user?.email,
            firebaseID: result.user?.uid,
            userType: userT
          }).subscribe((response) => {
            localStorage.setItem("yuvaId", response.toString())
            this.router.navigate(['/profile/employee/' + response.toString()])
          })


        } else {
          this.userService.createUser({
            firstName: firstName,
            lastName: lastName,
            email: result.user?.email,
            firebaseID: result.user?.uid,
            userType: userT
          }).subscribe((response) => {
            console.log("response in auth service", response)
            localStorage.setItem("yuva", response.toString())
            this.router.navigate(['/profile/contractor/' + response.toString()])
          })
        }
        localStorage.setItem("user", JSON.stringify(result.user));
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // SendVerificationMail() {
  //   return this.afAuth.currentUser
  //     .then((u: any) => u.sendEmailVerification())
  //     .then(() => {
  //       this.router.navigate(['verify-email-address']);
  //     });
  // }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard']);
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
        // this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("yuvaId");
      console.log('signout');
      // this.router.navigate(['sign-in']);
    });
  }

  getUserByFirebaseId() {

  }

  getUserType(user: any) {
    let header = new HttpHeaders().set('Type-content', 'application/json')

    return this.http.get("http://localhost:3000/yuva-api/users/" + user.id, {
      headers: header
    });

  }

}
