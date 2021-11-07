import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Planes } from 'src/app/interfaces/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'listado-planes',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoPlanComponent implements OnInit {
  listPlan: Planes[]=[];
  displayedColumns: string[] = [ 'id','codigo','nombre','descripcion_solicitud','cantidad_personas',
    'fecha_solicitud','fecha_inicio_viaje','fecha_fin_viaje','valor_total','fecha_creacion',
    'fecha_modificacion','usu_creador','usu_modificador','estado','id_clie','id_usua','acciones'];
  dataSource!: MatTableDataSource<any>;

  id: string | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private planService: PlanService, private _snackbar: MatSnackBar, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.cargarPlan();
  }

  cargarPlan(){
    this.listPlan = this.planService.getPlan();
    this.dataSource = new MatTableDataSource(this.listPlan);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarPlan(index:number){
    this.planService.eliminarPla(index);
    this.cargarPlan();

    this._snackbar.open('El plan fue eliminado  exitosamente','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition: 'top'
    })
  }

}
