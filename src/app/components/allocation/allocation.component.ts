import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AllocationService } from 'src/app/services/allocation.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.scss']
})
export class AllocationComponent implements OnInit {

  allocation: any;
  employee: any;
  id: any;
  isAllocationLoaded: boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private allocationService: AllocationService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadAllocation();
    this.findEmployee();
  }


  loadAllocation() {
    console.log("getting service")
    this.http
      .get('http://localhost:3000/yuva-api/allocations/' + this.id)
      .subscribe((response) => {
        console.log(JSON.stringify(response))
        this.allocation = response
        this.isAllocationLoaded = true;
        if (this.allocation.confirmedEmployeeId) {
          this.http
            .get('http://localhost:3000/yuva-api/users/' + this.allocation.confirmedEmployeeId)
            .subscribe((response) => {
              //alert(JSON.stringify(response))
              this.employee = response
            });
        }
      });
  }

  findEmployee() {
    this.allocationService.searchEmployee(this.id).subscribe((result) => {
      console.log('hola');
    });
  }
}
