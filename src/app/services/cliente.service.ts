import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  listaClientes: Clientes[] = [
    {id: '1', numero_identificacion: '1323', primer_apellido: 'Acosta', segundo_apellido: 'Ramirez', nombre:'Angela', telefono1:'34353545',
    telefono2:'3253545', correo:'angelamaria731@hotmail.com', sexo:'F',fecha_nacimiento:'2000-07-31', fecha_creacion:'',fecha_modificacion:'',usu_creador:'CLOPEZ',
    usu_modificador:'', estado:'A',id_tid:'1'},
    {id: '2', numero_identificacion: '3278472', primer_apellido: 'Lopez', segundo_apellido: 'Arbelaez', nombre:'Camilo', telefono1:'2367623',
    telefono2:'73748732', correo:'camilo@hotmail.com', sexo:'M',fecha_nacimiento:'2003-03-12', fecha_creacion:'',fecha_modificacion:'',
    usu_creador:'CLOPEZ',usu_modificador:'', estado:'A',id_tid:'4'},

   ];

  constructor() { }

  getCliente(){
    return this.listaClientes.slice();
  }
  eliminarCliente(index: number){
    this.listaClientes.splice(index,1);
  }
  
}
