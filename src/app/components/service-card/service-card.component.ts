import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: any;
  @Output() public favoriteEvent: EventEmitter <any> = new EventEmitter();

  isFavorite: boolean = false
 

  constructor() { 
    
  }


  

  clickFavorite() {
    console.log(this)
    this.isFavorite = !this.isFavorite;
    this.favoriteEvent.emit([this.isFavorite, this.service])

  }



  ngOnInit(): void {
   
  }
}
