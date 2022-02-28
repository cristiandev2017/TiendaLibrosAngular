import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../shared/carrito.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styles: [
  ]
})
export class HomeLayoutComponent implements OnInit {

  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
  }

  get items(){
    return this.carritoService.items;
  }

}
