import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userAuthenticated!: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userLoggedIn()
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
}
