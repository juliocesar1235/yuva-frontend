import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: any;
  @Output() public favoriteEvent: EventEmitter<any> = new EventEmitter();
  @Input() isLogedIn: boolean = false;

  @Input() isFavorite: boolean = false


  constructor(private router: Router) {

  }




  clickFavorite() {
    console.log(this)
    this.isFavorite = !this.isFavorite;
    this.favoriteEvent.emit([this.isFavorite, this.service])

  }

  selectService(id: any) {
    localStorage.setItem("serviceId", id)
    this.router.navigate(['/service-detail'])
  }

  ngOnInit(): void {
    console.log(this.service._id, "IDDDDDD")

  }
}
