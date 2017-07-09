import { Component, OnInit } from '@angular/core';

import { LineaAccionService } from '../linea-accion.service'; 
import { LineaAccion } from '../linea-accion'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
 //template: 'asfd',
  styleUrls: ['./dashboard.component.sass'],
    providers:[LineaAccionService]
})
export class DashboardComponent implements OnInit {

  lineasAccion: LineaAccion[];
 

  constructor(private lineaAccionService: LineaAccionService) { }

  getLineasAccion(): void {

  	console.log()
    this.lineaAccionService.getLineasAccion().then(lineasAccion => this.lineasAccion = lineasAccion);
  }

  ngOnInit(): void {
    this.getLineasAccion();
  }

}
