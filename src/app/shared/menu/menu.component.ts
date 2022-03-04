import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    
  menu: MenuItem[] = [
    { ruta: '/grafica/barra' , texto: 'Barras'},
    { ruta: '/grafica/dona' , texto: 'Dona'},
    { ruta: '/grafica/circulo' , texto:'Circulo'},
    { ruta: '/grafica/area' , texto: 'Area'}
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
