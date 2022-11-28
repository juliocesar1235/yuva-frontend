import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-servicio-contratar',
  templateUrl: './vista-servicio-contratar.component.html',
  styleUrls: ['./vista-servicio-contratar.component.scss']
})
export class VistaServicioContratarComponent implements OnInit {

  allocation: any;
  id: any;

  constructor(private http: HttpClient,private route: ActivatedRoute) { }


  loadAllocation() {
    console.log("getting service")
    this.http
      .get('http://localhost:3000/yuva-api/allocations/' + this.id)
      .subscribe((response) => {
        //alert(JSON.stringify(response))
        this.allocation = response
        console.log(this.allocation)

      }
      )

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.loadAllocation()
  }

}
