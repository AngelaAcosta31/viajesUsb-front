import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaUsuarios: Usuarios[] = [];

  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }
  eliminarUsuario(index: number){
    this.listaUsuarios.splice(index,1);
  }
}
