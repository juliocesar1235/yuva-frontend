import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: any;


  isFavorite: boolean = false

  constructor(
  ) {

  }







  clickFavorite() {
    console.log(this)
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit(): void {

  }
}
