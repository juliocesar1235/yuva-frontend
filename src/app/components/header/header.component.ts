import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userAuthenticated!: boolean;
  userName!:any;
  userEmp!: boolean;
  userID!: any;
  constructor(
    private authService: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
    this.userLoggedIn()
    this.userName = localStorage.getItem("name")
    this.getUserType()
  }

  signOut() {
    this.authService.SignOut().then(() => {
      window.location.reload();
    });
  }

  userLoggedIn() {
    if (localStorage.getItem('user')) {
      this.userAuthenticated = true;
    } else {
      this.userAuthenticated = false;
    }
  }

  getUserType(){
    if (localStorage.getItem('userT') == "employee") {
      this.userEmp = true;
    } else {
      this.userEmp = false;
    }
  }

  routHistorial(){
    if(localStorage.getItem('userT') == "employee"){
      this.router.navigate(['profile/employee/' + localStorage.getItem("yuva")])
    }else{
      this.router.navigate(['profile/contractor/' + localStorage.getItem("yuva")])
    }

  }

  routfavoritel(){
    this.router.navigate(['profile/contractor/'+localStorage.getItem("yuva")+ '/favorite'])
    // profile/contractor/:id/favorite
  }
}
