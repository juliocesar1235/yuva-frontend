import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-historial',
  templateUrl: './history-service.component.html',
  styleUrls: ['./history-service.component.scss']
})
export class HistoryServiceComponent implements OnInit {

  @Input() service: {
    name: string;
    desc: string;
    media: object;
    totalOfEmployees: number;
    averageServiceTime: number;
    cost: number;
    id?: string;
  } | undefined;
  constructor(service: Object) { }




  ngOnInit(): void {
  }

}
