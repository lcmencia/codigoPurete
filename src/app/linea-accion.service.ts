import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import {LineaAccion} from './linea-accion';




var valor = {"id":799,"nombre":" SECTOR DESARROLLO SOCIAL","descripcion":"22-8-2-1-5-0","orden":2010500,"peso":1,"acumular":true,"tipoAccionId":99,"estrategiaId":99,"unidadMedidaId":48,"borrado":false,"acciones":[]}

let LINEAS = [
  new LineaAccion(valor),
  new LineaAccion(valor),
  new LineaAccion(valor),
  new LineaAccion(valor),
  new LineaAccion(valor),
  new LineaAccion(valor)
];


let lineasPromise = Promise.resolve(LINEAS);


@Injectable()
export class LineaAccionService {

getLineasAccion() { return lineasPromise; }





}
