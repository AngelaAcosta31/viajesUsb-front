import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TipoIdentificacion } from 'src/app/interfaces/tipoIdentificacion';
import { TipoIdentificacionService } from '../../services/tipo-identificacion.service';

@Component({
  selector: 'ver-tipoid',
  templateUrl: './ver-tipoid.component.html',
  styleUrls: ['./ver-tipoid.component.css']
})
export class VerTipoidComponent implements OnInit {

  listTipoId: TipoIdentificacion[]=[];
  displayedColumns: string[] = ['id','codigo','nombre', 'fecha_creacion','fecha_modificacion','usu_creador','usu_modificador', 'estado','acciones'];
  dataSource!: MatTableDataSource<any>;

  id: string | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tipoIdService: TipoIdentificacionService, private _snackbar: MatSnackBar, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarTipoId();
  }

  cargarTipoId(){
    this.listTipoId = this.tipoIdService.getTipoIdentificacion();
    this.dataSource = new MatTableDataSource(this.listTipoId);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarTipoId(index:number){
    this.tipoIdService.eliminarTipoIdentificacion(index);
    this.cargarTipoId();

    this._snackbar.open('El tipo Identificación fue eliminado  exitosamente','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition: 'top'
    })
  }

}

