import { Injectable } from '@angular/core';
import { TipoIdentificacion } from '../interfaces/tipoIdentificacion';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {
  listaTipoIds: TipoIdentificacion[] = [];

  constructor() { }


  getTipoIdentificacion(){
    return this.listaTipoIds.slice();
  }
  eliminarTipoIdentificacion(index: number){
    this.listaTipoIds.splice(index,1);
  }
}
