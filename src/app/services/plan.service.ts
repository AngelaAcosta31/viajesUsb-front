import { Injectable } from '@angular/core';
import { Planes } from '../interfaces/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  listaPlanes: Planes[]=[
    {id: '2', codigo: 'TA', nombre: 'PLAN SEMANA TEMPORADA ALTA', descripcion_solicitud: 'SEMANA RELAX', cantidad_personas: '4', fecha_solicitud: '2021-08-31',
      fecha_inicio_viaje: '2021-10-31', fecha_fin_viaje: '2021-11-10', valor_total:'1000000.00', fecha_creacion: '2021-10-05', fecha_modificacion: '',
      usu_creador: 'CLOPEZ', usu_modificador: '', estado: 'A', id_clie: '2', id_usua: '3'},
    {id: '3', codigo: 'LA', nombre: 'VIAJE A LOS ANGELES', descripcion_solicitud: 'PLAN VACACIONAL POR LOS ANGELES Y SUS ALREDEDORES', cantidad_personas: '6', fecha_solicitud: '2021-10-04',
    fecha_inicio_viaje: '2022-02-20', fecha_fin_viaje: '2022-03-10', valor_total:'20000000.00', fecha_creacion: '2021-10-04', fecha_modificacion: '',
    usu_creador: 'CLOPEZ', usu_modificador: '', estado: 'A', id_clie: '3', id_usua: '1'},
  ];
  constructor() { }

  getPlan(){
    return this.listaPlanes.slice();
  }
  eliminarPla(index: number){
    this.listaPlanes.splice(index,1);
  }

}
