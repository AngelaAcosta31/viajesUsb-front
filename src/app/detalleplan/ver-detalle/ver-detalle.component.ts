import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DetallePlanService } from 'src/app/services/detalle-plan.service';
import { DetallePlan } from 'src/app/interfaces/detallePlan';

@Component({
  selector: 'listado-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent implements OnInit {

  listDetalles: DetallePlan[]=[];
  displayedColumns: string[] = ['id','alimentacion','hospedaje','transporte','traslados', 'valor',
  'cantidad_noches', 'cantidad_dias', 'fecha_creacion','fecha_modificacion','usu_creador','usu_modificador', 'estado','id_plan','id_dest','acciones'];
  dataSource!: MatTableDataSource<any>;

  id: string | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private detalleService: DetallePlanService, private _snackbar: MatSnackBar, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarDetalle();
  }

  cargarDetalle(){
    this.listDetalles = this.detalleService.getDetallePlan();
    this.dataSource = new MatTableDataSource(this.listDetalles);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarDetalle(index:number){
    this.detalleService.eliminarDetallePla(index);
    this.cargarDetalle();

    this._snackbar.open('El detalle fue eliminado  exitosamente','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition: 'top'
    })
  }


}
