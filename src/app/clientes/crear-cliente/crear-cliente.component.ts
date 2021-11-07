import { Component, OnInit } from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  genero: any[] = [
    {value: 'F', viewValue: 'Femenino'},
    {value: 'M', viewValue: 'Masculino'},

  ];

  estado: any[] = [
    {value: 'A', viewValue: 'Activo'},
    {value: 'I', viewValue: 'Inactivo'},

  ];
  id_tid: any[] = [
    {value: '1', viewValue: 'Playa'},
    {value: '2', viewValue: 'Ciudad'},
    {value: '3', viewValue: 'Nieve'},
  ];

  constructor() {

   }

  ngOnInit(): void {
  }

}
