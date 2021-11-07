import { Injectable } from '@angular/core';
import { DetallePlan } from '../interfaces/detallePlan';

@Injectable({
  providedIn: 'root'
})
export class DetallePlanService {
  listaDetalle: DetallePlan[] = [
    {id: '44', alimentacion: 'S', hospedaje: 'S', transporte: 'N', traslados:'N', valor: '300000', cantidad_noches: '2',
    cantidad_dias: '3', fecha_creacion: '2021-06-12', fecha_modificacion: '', usu_creador: 'CLOPEZ', usu_modificador: '',
    estado: 'A',id_plan: '2', id_dest: '3'},
    {id: '21', alimentacion: 'S', hospedaje: 'S', transporte: 'S', traslados:'S', valor: '1000000', cantidad_noches: '4',
    cantidad_dias: '5', fecha_creacion: '2021-10-10', fecha_modificacion: '', usu_creador: 'CLOPEZ', usu_modificador: '',
    estado: 'A',id_plan: '1', id_dest: '2'},
    {id: '10', alimentacion: 'N', hospedaje: 'S', transporte: 'N', traslados:'N', valor: '2500000', cantidad_noches: '7',
    cantidad_dias: '8', fecha_creacion: '2021-08-20', fecha_modificacion: '', usu_creador: 'CLOPEZ', usu_modificador: '',
    estado: 'A',id_plan: '3', id_dest: '1'},
  ];

  constructor() { }

  getDetallePlan(){
    return this.listaDetalle.slice();
  }
  eliminarDetallePla(index: number){
    this.listaDetalle.splice(index,1);
  }
}
