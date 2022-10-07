import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-perfil-contratista',
  templateUrl: './perfil-contratista.component.html',
  styleUrls: ['./perfil-contratista.component.scss']
})
export class PerfilContratistaComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }

}
