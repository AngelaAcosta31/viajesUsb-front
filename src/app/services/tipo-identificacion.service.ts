import { Injectable } from '@angular/core';
import { TipoIdentificacion } from '../interfaces/tipoIdentificacion';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {
  listaTipoIds: TipoIdentificacion[] = [
    {id: '1', codigo: 'CC', nombre: 'CEDULA DE CIUDADANIA', fecha_creacion: '2021-02-13', fecha_modificacion: '', usu_creador: 'CLOPEZ',
     usu_modificador: '', estado: 'A'},
     {id: '2', codigo: 'TI', nombre: 'TARJETA DE IDENTIDAD', fecha_creacion: '2021-02-13', fecha_modificacion: '', usu_creador: 'CLOPEZ',
     usu_modificador: '', estado: 'A'},
  ];

  constructor() { }


  getTipoIdentificacion(){
    return this.listaTipoIds.slice();
  }
  eliminarTipoIdentificacion(index: number){
    this.listaTipoIds.splice(index,1);
  }
}
