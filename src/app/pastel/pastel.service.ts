import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Pastel } from './pastel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastelService {

  private url: string="http://localhost:8081/api/pastel";

  constructor(private http:HttpClient) { }

  // obtener estudiantes  
  getAll():Observable<Pastel[]>{
    return this.http.get<Pastel[]>(this.url);
  }

  // Crear estuadiante
  create(pastel:Pastel):Observable<Pastel>{

    return this.http.post<Pastel>(this.url, pastel);
  }

  // obtener un estudiante

  get(id:number):Observable<Pastel>{
    return this.http.get<Pastel>(this.url+'/'+id);
  }

  // actualizar un estudiante 
  update(pastel:Pastel):Observable<Pastel>{
    return this.http.put<Pastel>(this.url, pastel);
  }

  // Eliminar un estudiante
  delete(id:number):Observable<Pastel>{
    return this.http.delete<Pastel>(this.url+'/'+id);
  }

}