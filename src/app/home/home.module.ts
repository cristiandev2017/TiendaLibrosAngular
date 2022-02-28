import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { LibrosComponent } from './libros/libros.component';
import { TarjetaLibroComponent } from './shared/tarjeta-libro/tarjeta-libro.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetallesLibroComponent } from './detalles-libro/detalles-libro.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    IndexComponent,
    HomeLayoutComponent,
    LibrosComponent,
    TarjetaLibroComponent,
    DetallesLibroComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HomeRoutingModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
