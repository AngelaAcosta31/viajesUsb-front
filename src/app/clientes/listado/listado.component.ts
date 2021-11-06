import { Component, OnInit, ViewChild } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClienteService } from 'src/app/services/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';



@Component({
  selector: 'listado-clientes',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listClientes: Clientes[]=[];
  displayedColumns: string[] = ['id','numero_identificacion','primer_apellido','segundo_apellido','nombre', 'telefono1',
  'telefono2', 'correo', 'sexo','fecha_nacimiento', 'fecha_creacion','fecha_modificacion','usu_creador','usu_modificador', 'estado','id_tid','acciones'];
  dataSource!: MatTableDataSource<any>;

  id: string | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private clienteService: ClienteService, private _snackbar: MatSnackBar, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(){
    this.listClientes = this.clienteService.getCliente();
    this.dataSource = new MatTableDataSource(this.listClientes);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCliente(index:number){
    this.clienteService.eliminarCliente(index);
    this.cargarCliente();

    this._snackbar.open('El cliente fue eliminado  exitosamente','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition: 'top'
    })
  }

 

}
