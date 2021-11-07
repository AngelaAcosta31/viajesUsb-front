import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaUsuarios: Usuarios[] = [
    {id: '1', login:'CLOPEZ', password: '2332', nombre: 'CESAR LOPEZ', identificacion: '35454', fecha_creacion: '2020-09-12', fecha_modificacion: '',
    usu_creador: 'CLOPEZ', usu_modificador: '', estado: 'A'},
    {id: '2', login:'AACOSTA', password: '2332', nombre: 'ANGELA ACOSTA', identificacion: '34665', fecha_creacion: '2021-08-12', fecha_modificacion: '',
    usu_creador: 'CLOPEZ', usu_modificador: '', estado: 'A'},
  ];

  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }
  eliminarUsuario(index: number){
    this.listaUsuarios.splice(index,1);
  }
}
