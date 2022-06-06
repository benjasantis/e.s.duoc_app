import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiBase = 'http://localhost:3000/';


  constructor(public http:HttpClient) { }

  crearUsuario(rut, password) {
    return this.http.post(this.apiBase + 'usuario', { 
    "rut": rut,
    "password": password})
    
  }

  publicacion(titulo,descripcion,carrera,asignatura,) {
    return this.http.post(this.apiBase + 'publicacion', { 
    "titulo":titulo,
    "descripcion": descripcion,
    "carrera": carrera,
    "asignatura": asignatura
    })
    
  }

  listarPublicaciones(): Observable<any>
  {

    return this.http.get(this.apiBase+"comunidad").pipe();
    
  }

}
