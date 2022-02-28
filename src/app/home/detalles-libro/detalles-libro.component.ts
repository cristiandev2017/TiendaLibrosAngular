import { Component, OnInit } from '@angular/core';
import { Libro } from '../../admin/libros/shared/ibro.model';
import { HomeService } from '../shared/home.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../shared/carrito.service';

@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styles: [
  ]
})
export class DetallesLibroComponent implements OnInit {

  libro?:Libro;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {

    const slug = this.route.snapshot.paramMap.get('slug')!;

    this.homeService.getLibro(slug)
    .subscribe(libro=>{
      this.libro = libro;
    })
  }

  agregarLibroAlCarrito(){
    this.carritoService.agregarItem(this.libro!);
  }

  removerLibroDelCarrito(){
    this.carritoService.removerItem(this.libro!);
  }

  libroYaEstaEnCarrito(){
    return this.carritoService.itemYaExiste(this.libro!);
  }

}
