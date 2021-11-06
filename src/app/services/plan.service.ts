import { Injectable } from '@angular/core';
import { Planes } from '../interfaces/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  listaPlanes: Planes[]=[];
  constructor() { }

  getPlan(){
    return this.listaPlanes.slice();
  }
  eliminarPla(index: number){
    this.listaPlanes.splice(index,1);
  }

}
