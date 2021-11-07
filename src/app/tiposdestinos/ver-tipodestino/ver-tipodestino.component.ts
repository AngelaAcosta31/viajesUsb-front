import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TipoDestino } from 'src/app/interfaces/tipoDestino';
import { TipoDestinoService } from 'src/app/services/tipo-destino.service';

@Component({
  selector: 'ver-tipodestino',
  templateUrl: './ver-tipodestino.component.html',
  styleUrls: ['./ver-tipodestino.component.css']
})
export class VerTipodestinoComponent implements OnInit {


  listTipoDestino: TipoDestino[]=[];
  displayedColumns: string[] = ['id','codigo','nombre', 'descripcion','fecha_creacion','fecha_modificacion','usu_creador','usu_modificador', 'estado'];
  dataSource!: MatTableDataSource<any>;

  id: string | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tipoDestinoService: TipoDestinoService, private _snackbar: MatSnackBar, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarTipoDes();
  }

  cargarTipoDes(){
    this.listTipoDestino = this.tipoDestinoService.getTipoDestino();
    this.dataSource = new MatTableDataSource(this.listTipoDestino);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarTipoDestino(index:number){
    this.tipoDestinoService.eliminarTipoDestino(index);
    this.cargarTipoDes();

    this._snackbar.open('El tipo destino fue eliminado  exitosamente','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition: 'top'
    })
  }



}
