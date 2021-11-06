import { Injectable } from '@angular/core';
import { DetallePlan } from '../interfaces/detallePlan';

@Injectable({
  providedIn: 'root'
})
export class DetallePlanService {
  listaDetalle: DetallePlan[] = [];

  constructor() { }

  getDetallePlan(){
    return this.listaDetalle.slice();
  }
  eliminarDetallePla(index: number){
    this.listaDetalle.splice(index,1);
  }
}
