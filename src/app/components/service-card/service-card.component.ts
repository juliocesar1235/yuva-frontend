import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() serviceList: any;

  color: any;
  isFavorite: any;
  
  constructor() { 
      
  this.color = 'lightgrey'
  this.isFavorite = false;

  }

  
   
  clickFavorite(){
    console.log("en la funcion click")
    this.isFavorite = !this.isFavorite;
    this.color = this.isFavorite?'blue':'lightgrey'
  }

  ngOnInit(): void {

  }
}
