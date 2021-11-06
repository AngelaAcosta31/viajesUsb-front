import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  menu: Menu[]=[];
  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this.menuService.getMenu().subscribe(data => {
      this.menu=data
    });
  }


}
