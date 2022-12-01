import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userAuthenticated!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.userLoggedIn()
  }

  userLoggedIn(){
    if(localStorage.length > 0){
      this.userAuthenticated = true;
    }else{
      this.userAuthenticated = false;
    }
  }
}
