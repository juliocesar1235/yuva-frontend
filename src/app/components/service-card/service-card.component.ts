import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: any;
  @Output() public favoriteEvent: EventEmitter<any> = new EventEmitter();
  @Input() isLoggedIn: boolean = false;

  @Input() isFavorite: boolean = false
  userId: any;


  constructor(private router: Router, private auth: AuthService) {

  }




  clickFavorite() {
    // console.log(this)
    this.isFavorite = !this.isFavorite;
    this.favoriteEvent.emit([this.isFavorite, this.service])

  }

  selectService(id: any) {
    localStorage.setItem("serviceId", id)
    // let userId = localStorage.getItem("yuva");

    this.router.navigate(['/service-detail'])
  }

  ngOnInit(): void {
    console.log(this.service._id, "IDDDDDD")
    this.isLoggedIn = this.auth.isLoggedIn
 
  }
}
