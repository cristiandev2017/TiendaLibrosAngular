import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Libro, LibroPage } from '../../admin/libros/shared/ibro.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http:HttpClient
  ) { }

  getUltimosLibros() {
    return this.http.get<Libro[]>(`${environment.apiBase}/ultimos-libros`);
  }
  getLibros(page: number = 0, size: number = 6) {
    let params = new HttpParams();
    params = params.append('size',size);
    params = params.append('page',page);
    params = params.append('sort','fechaCreacion,desc');
    return this.http.get<LibroPage>(`${environment.apiBase}/libros`,{params: params});
  }
  getLibro(slug: string) { 
    return this.http.get<Libro>(`${environment.apiBase}/libros/${slug}`)
  }
}
