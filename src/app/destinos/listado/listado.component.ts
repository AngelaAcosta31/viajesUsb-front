import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DestinoService } from '../../services/destino.service';
import { Destino } from 'src/app/interfaces/destinos';
@Component({
  selector: 'destinos',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoDestinosComponent implements OnInit {
  listDestinos: Destino[]=[];
  displayedColumns: string[] = ['id','codigo','nombre','descripcion','tierra','aire','mar','fecha_creacion','fecha_modificacion',
    'usu_creador','usu_modificador','estado','id_tide','acciones'];
  dataSource!: MatTableDataSource<any>;

  id: string | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private destinoService: DestinoService, private _snackbar: MatSnackBar, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.cargarDestino();
  }

  cargarDestino(){
    this.listDestinos = this.destinoService.getDestino();
    this.dataSource = new MatTableDataSource(this.listDestinos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarDestino(index:number){
    this.destinoService.eliminarDestino(index);
    this.cargarDestino();

    this._snackbar.open('El destino fue eliminado  exitosamente','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition: 'top'
    })
  }

}
