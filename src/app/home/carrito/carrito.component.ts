import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../shared/carrito.service';
import { Libro } from '../../admin/libros/shared/ibro.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [
  ]
})
export class CarritoComponent implements OnInit {

  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
  }

  get items(){
    return this.carritoService.items;
  }

  removerLibroDelCarrito(libro:Libro){
    this.carritoService.removerItem(libro)
  }

}
