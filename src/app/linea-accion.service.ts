import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import {LineaAccion} from './linea-accion';

let LINEAS = [
  new LineaAccion(11, 'Mr. Nice'),
  new LineaAccion(12, 'Narco'),
  new LineaAccion(13, 'Bombasto'),
  new LineaAccion(14, 'Celeritas'),
  new LineaAccion(15, 'Magneta'),
  new LineaAccion(16, 'RubberMan')
];


let lineasPromise = Promise.resolve(LINEAS);


@Injectable()
export class LineaAccionService {

getLineasAccion() { return lineasPromise; }





}
