import { Injectable } from '@angular/core';
import { Destinos } from '../interfaces/destinos';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  listaDestinos: Destinos[] = [
    

   ];

  constructor() { }
  getDestino(){
    return this.listaDestinos.slice();
  }
  eliminarDestino(index: number){
    this.listaDestinos.splice(index,1);
  }
}
