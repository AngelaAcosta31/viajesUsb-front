import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-destino',
  templateUrl: './crear-destino.component.html',
  styleUrls: ['./crear-destino.component.css']
})
export class CrearDestinoComponent implements OnInit {



  estado: any[] = [
    {value: 'A', viewValue: 'Activo'},
    {value: 'I', viewValue: 'Inactivo'},

  ];
  id_tide: any[] = [
    {value: 'F', viewValue: 'Playa'},
    {value: 'M', viewValue: 'Ciudad'},
    {value: 'M', viewValue: 'Nieve'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
