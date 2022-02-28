import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { Libro } from '../../admin/libros/shared/ibro.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent implements OnInit {

  ultimosLibros?: Libro[];

  constructor(
    private homeService:HomeService,
  ) { }

  ngOnInit(): void {
    this.homeService.getUltimosLibros()
      
      .subscribe(ultimosLirbos=>{
        this.ultimosLibros = ultimosLirbos;
        console.log(this.ultimosLibros);
      })   
  }

}
