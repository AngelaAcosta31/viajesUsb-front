import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Planes } from 'src/app/interfaces/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {

  estado: any[] = [
    {value: 'A', viewValue: 'Activo'},
    {value: 'I', viewValue: 'Inactivo'},

  ];
  id_cliente: any[] = [
    {value: '1', viewValue: 'Juan'},
    {value: '2', viewValue: 'Carolina'},


  ];
  id_usuario: any[] = [
    {value: '1', viewValue: 'CESAR LOPEZ'},
    {value: '2', viewValue: 'ANGELA ACOSTA'},


  ];
  constructor() { }

  ngOnInit(): void {
  }


}

