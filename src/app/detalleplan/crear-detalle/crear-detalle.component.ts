import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-detalle',
  templateUrl: './crear-detalle.component.html',
  styleUrls: ['./crear-detalle.component.css']
})
export class CrearDetalleComponent implements OnInit {


  estado: any[] = [
    {value: 'A', viewValue: 'Activo'},
    {value: 'I', viewValue: 'Inactivo'},

  ];
  id_planes: any[] = [
    {value: 'F', viewValue: 'Playa'},
    {value: 'M', viewValue: 'Ciudad'},
    {value: 'M', viewValue: 'Nieve'},
  ];
    id_destinos: any[] = [
      {value: 'F', viewValue: 'Femenino'},
      {value: 'M', viewValue: 'Masculino'},


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
