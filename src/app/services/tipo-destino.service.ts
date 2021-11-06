import { Injectable } from '@angular/core';
import { TipoDestino } from '../interfaces/tipoDestino';

@Injectable({
  providedIn: 'root'
})
export class TipoDestinoService {

  listaTipoDestinos: TipoDestino[] = [];

  constructor() { }

  getTipoDestino(){
    return this.listaTipoDestinos.slice();
  }
  eliminarTipoDestino(index: number){
    this.listaTipoDestinos.splice(index,1);
  }
}
