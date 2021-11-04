import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() tarjetas:string;
  titulo: string;
  imagen: string;
  texto: string;
  constructor(private router: Router) {
    this.tarjetas ="";
    this.titulo ="";
    this.imagen ="";
    this.texto ="";
  }

  ngOnInit(): void {
  
  }

  textoTarjetas(titulo: string, imagen:string, texto:string){

  }

}
