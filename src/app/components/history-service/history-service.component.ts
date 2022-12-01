import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicio-historial',
  templateUrl: './history-service.component.html',
  styleUrls: ['./history-service.component.scss']
})
export class HistoryServiceComponent implements OnInit {

  @Input() serviceList: any;
  constructor(private router: Router) { 

  }

  btnClick() {
    this.router.navigateByUrl('/service-detail');
  }
  
  ngOnInit(): void {
    console.log("Lista de servicio", this.serviceList)

  }
  
}
