import { Component, OnInit } from '@angular/core';
import { ServiceListService } from '../../services/service-list.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  public services: Array<any> = [];

  constructor(private servicelistservices:ServiceListService) { 
    this.servicelistservices.getServices().subscribe((resp: any)=>{
      // console.log(resp)
      this.services = resp;
    })
  }

  ngOnInit(): void {
  }

}
