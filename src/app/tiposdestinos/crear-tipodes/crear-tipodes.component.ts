import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-tipodes',
  templateUrl: './crear-tipodes.component.html',
  styleUrls: ['./crear-tipodes.component.css']
})
export class CrearTipodesComponent implements OnInit {
  estado: any[] = [
    {value: 'A', viewValue: 'Activo'},
    {value: 'I', viewValue: 'Inactivo'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
