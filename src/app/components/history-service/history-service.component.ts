import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllocation } from 'src/app/interfaces/allocations';
@Component({
  selector: 'app-servicio-historial',
  templateUrl: './history-service.component.html',
  styleUrls: ['./history-service.component.scss']
})
export class HistoryServiceComponent implements OnInit {

  @Input() allocationList!: [IAllocation];
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log("Lista de servicio", this.allocationList)

  }

  goToAllocation(id: string | undefined) {
    if (id) {
      this.router.navigateByUrl('/allocation/' + id);
    }
  }

}
