import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.css']
})
export class CrearTipoComponent implements OnInit {

  estado: any[] = [
    {value: 'A', viewValue: 'Activo'},
    {value: 'I', viewValue: 'Inactivo'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
