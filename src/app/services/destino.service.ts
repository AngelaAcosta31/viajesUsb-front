import { Injectable } from '@angular/core';
import { Destino } from '../interfaces/destinos';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  listaDestinos: Destino[] = [
    { id: '1', codigo: '23', nombre: 'CARTAGENA', descripcion: 'CIUDAD HISTORICA', tierra: 'S', aire: 'S', mar: 'S', fecha_creacion: '2021-04-12',
      fecha_modificacion: '', usu_creador: 'CLOPEZ', usu_modificador: '', estado: 'A', id_tide: '2'},
      { id: '2', codigo: '14', nombre: 'CALI', descripcion: 'CAPITAL DEL VALLE DEL CAUCA', tierra: 'S', aire: 'S', mar: 'S', fecha_creacion: '2020-10-12',
      fecha_modificacion: '', usu_creador: 'CLOPEZ', usu_modificador: '', estado: 'A', id_tide: '1'},
   ];

  constructor() { }
  getDestino(){
    return this.listaDestinos.slice();
  }
  eliminarDestino(index: number){
    this.listaDestinos.splice(index,1);
  }
}
