import { Injectable } from '@angular/core';
import { TipoDestino } from '../interfaces/tipoDestino';

@Injectable({
  providedIn: 'root'
})
export class TipoDestinoService {

  listaTipoDestinos: TipoDestino[] = [
    {id: '1', codigo: 'PLAYA', nombre: 'PLAYA Y MAR', descripcion: 'DESTINO QUE CUENTA CON MAR, BRISA Y ARENA', fecha_creacion: '2021-02-13', fecha_modificacion: '',
    usu_creador: 'CLOPEZ', usu_modificador: '', estado: 'A'},
    {id: '2', codigo: 'BOSQUE', nombre: 'NATURALEZA, BOSQUE Y AIRE', descripcion: 'DESTINO  RODEADO DE NATURALEZ', fecha_creacion: '2021-02-13', fecha_modificacion: '',
    usu_creador: 'CLOPEZ', usu_modificador: '', estado: 'A'},
  ];

  constructor() { }

  getTipoDestino(){
    return this.listaTipoDestinos.slice();
  }
  eliminarTipoDestino(index: number){
    this.listaTipoDestinos.splice(index,1);
  }
}
