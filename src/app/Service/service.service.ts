import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiBase = 'http://localhost:4000/fromoracle/';


  constructor(public http:HttpClient, private router:Router) { }

 

  crearUsuario(RUT_USUARIO, PASSWORD_USUARIO) {
    return this.http.post(this.apiBase + 'registrar', { 
    "RUT_USUARIO": RUT_USUARIO,
    "PASSWORD_USUARIO": PASSWORD_USUARIO})
    
  }

  publicacion(TITULO_PUBLIC,DESC_PUBLIC,CONT_PUBLIC,NOMBRE_ASIGNATURA,NOMBRE_CARRERA,NOMBRE_SEDE,RUT_USUARIO) {
    return this.http.post(this.apiBase + 'agregarPublicacion', { 
    "TITULO_PUBLIC":TITULO_PUBLIC,
    "DESC_PUBLIC": DESC_PUBLIC,
    "CONT_PUBLIC": CONT_PUBLIC,
    "NOMBRE_ASIGNATURA": NOMBRE_ASIGNATURA,
    "NOMBRE_CARRERA": NOMBRE_CARRERA,
    "NOMBRE_SEDE": NOMBRE_SEDE,
    "RUT_USUARIO" :RUT_USUARIO,
    })
    
  }
  //agregarcomentario
  comentario(CONT_COMENTARIO, ID_PUBLICACION){
    return this.http.post(this.apiBase + 'agregarComentario', {
      "CONT_COMENTARIO": CONT_COMENTARIO,
      "ID_PUBLICACION": ID_PUBLICACION
    } )
  }

  listarPublicaciones(): Observable<any>
  {

    return this.http.get(this.apiBase+"publicaciones").pipe();
    
  }

  login(RUT_USUARIO, PASSWORD_USUARIO){
    return this.http.post(this.apiBase + 'login', { 
    "RUT_USUARIO": RUT_USUARIO,
    "PASSWORD_USUARIO": PASSWORD_USUARIO})

  }

  loginAdmin(RUT_ADMINISTRADOR, CONTRASENA_ADMINISTRADOR){
    return this.http.post(this.apiBase + 'login_admin', { 
    "RUT_ADMINISTRADOR": RUT_ADMINISTRADOR,
    "CONTRASENA_ADMINISTRADOR": CONTRASENA_ADMINISTRADOR})

  }

  //guaro en el local storage
  setCurrentUser(user:any){
    let user_string = JSON.stringify(user);
    localStorage.setItem('UsuarioLogueado', user_string);
  }
  //obtengo valor del local storage
  getCurrentUser(){
    let userCurrent = localStorage.getItem('UsuarioLogueado');
    if(!0[userCurrent]){
      let user_Json = JSON.parse(userCurrent);
      return user_Json;

    }else{
      return null;
    }
  }

  

  

  //cerrar sesion

  logout(){
    localStorage.removeItem('UsuarioLogueado');
    this.router.navigate(['/login']);
  }

  //listar asignaturas

  listarAsignaturas(): Observable<any>
  {

    return this.http.get(this.apiBase+"asignatura").pipe();
    
  }

  //listar carreras

  listarCarreras(): Observable<any>
  {

    return this.http.get(this.apiBase+"carrera").pipe();
    
  }

  //listar sedes

  listarSedes(): Observable<any>
  {

    return this.http.get(this.apiBase+"sede").pipe();
    
  }



  //listar publicaciones por usuario

  misPublicaciones(RUT_USUARIO){
    return this.http.post(this.apiBase + 'public_usuario', { 
    "RUT_USUARIO": RUT_USUARIO})

  }

  //Eliminar publicacion 

  eliminar(ID_PUBLIC){
    return this.http.post(this.apiBase + 'eliminarPublicacion', { 
    "ID_PUBLIC": ID_PUBLIC })

  }

  /*crearUsuario(RUT_USUARIO, PASSWORD_USUARIO) {
    return this.http.post(this.apiBase + 'registrar', { 
    "RUT_USUARIO": RUT_USUARIO,
    "PASSWORD_USUARIO": PASSWORD_USUARIO})
    
  }*/

 
  /*eliminarPublicacion(ID_PUBLIC){
    return this.http.delete(this.apiBase + 'deleteUser/' + ID_PUBLIC).pipe();

  }*/

  //guardo en el local storage id publicacion
  setIdPublicacion(publi:any){
    let id_string = JSON.stringify(publi);
    localStorage.setItem('id_public', id_string);
  }

  //obtener valor de id publicacion
  getIdPublicacion(){
    let idCurrent = localStorage.getItem('id_public');
    if(!0[idCurrent]){
      let id = JSON.parse(idCurrent);
      return id;

    }else{
      return null;
    }
  }
  //MIpUBLIC
  miPublic(ID_PUBLIC){
    return this.http.post(this.apiBase + 'mipublic', { 
    "ID_PUBLIC": ID_PUBLIC})

  }

  listarComentarios(): Observable<any>
  {

    return this.http.get(this.apiBase+"comentarios").pipe();
    
  }
  //listar genero

  genero(): Observable<any>
  {

    return this.http.get(this.apiBase+"genero").pipe();
    
  }

  salirPublicacion(){
    localStorage.removeItem('id_public');
    localStorage.removeItem('nota');
  }
  
  //listar informacion personal
  infoPersonal(): Observable<any>
  {

    return this.http.get(this.apiBase+"miInfo").pipe();
    
  }
  //listar comunas
  comuna(): Observable<any>
  {
    return this.http.get(this.apiBase + "comuna").pipe();
  }

  //listar usuarios
  usuarios(): Observable<any>
  {
    return this.http.get(this.apiBase + "usuarios").pipe();
  }

  //actualizar password

  actualizarPassword(RUT_USUARIO, PASSWORD_USUARIO){
    return this.http.post(this.apiBase + 'actualizarpassword', { 
    "PASSWORD_USUARIO": PASSWORD_USUARIO,
    "RUT_USUARIO": RUT_USUARIO})

  }

  //actualizar datos

  actualizardatos(RUT_USUARIO, PASSWORD_USUARIO){
    return this.http.post(this.apiBase + 'actualizarpassword', { 
    "PASSWORD_USUARIO": PASSWORD_USUARIO,
    "RUT_USUARIO": RUT_USUARIO})

  }

  //agregarinfopersonal

  agregarInformacion(EMAIL, PNOMBRE_USUARIO, PAPELLIDO_USUARIO, SAPELLIDO_USUARIO, TELEFONO_USUARIO, DIRECCION_USUARIO, NOMBRE_GENERO, NOMBRE_COMUNA, NOMBRE_CARRERA, NOMBRE_SEDE, RUT_USUARIO) {
    return this.http.post(this.apiBase + 'agregarinfo', { 
        "EMAIL":EMAIL,
        "PNOMBRE_USUARIO":PNOMBRE_USUARIO,
        "PAPELLIDO_USUARIO":PAPELLIDO_USUARIO,
        "SAPELLIDO_USUARIO": SAPELLIDO_USUARIO,
        "TELEFONO_USUARIO":TELEFONO_USUARIO,
        "DIRECCION_USUARIO": DIRECCION_USUARIO,
        "NOMBRE_GENERO":NOMBRE_GENERO,
        "NOMBRE_COMUNA": NOMBRE_COMUNA,
        "NOMBRE_CARRERA":NOMBRE_CARRERA,
        "NOMBRE_SEDE":NOMBRE_SEDE,
        "RUT_USUARIO":RUT_USUARIO})
    
  }

  //agregarinfopersonal

  actualizarInformacion(TELEFONO_USUARIO, DIRECCION_USUARIO, NOMBRE_GENERO, NOMBRE_COMUNA, NOMBRE_CARRERA, NOMBRE_SEDE, RUT_USUARIO) {
    return this.http.post(this.apiBase + 'actualizarinfo', { 

        "TELEFONO_USUARIO":TELEFONO_USUARIO,
        "DIRECCION_USUARIO": DIRECCION_USUARIO,
        "NOMBRE_GENERO":NOMBRE_GENERO,
        "NOMBRE_COMUNA": NOMBRE_COMUNA,
        "NOMBRE_CARRERA":NOMBRE_CARRERA,
        "NOMBRE_SEDE":NOMBRE_SEDE,
        "RUT_USUARIO":RUT_USUARIO})
    
  }
  //eliminar usuario
  eliminarUsuario(RUT_USUARIO){
    return this.http.post(this.apiBase + 'eliminarUsuario', { 
    "RUT_USUARIO": RUT_USUARIO })

  }
  //agregarcarrera
  agregarcarrera(NOMBRE_CARRERA){
    return this.http.post(this.apiBase + 'agregarCarrera', {
      "NOMBRE_CARRERA": NOMBRE_CARRERA
    } )
  }
  //agregarasignatura
  agregarasignatura(NOMBRE_ASIGNATURA){
    return this.http.post(this.apiBase + 'agregarAsignatura', {
      "NOMBRE_ASIGNATURA": NOMBRE_ASIGNATURA
    } )
  }
  //agregarsede
  agregarsede(NOMBRE_SEDE){
    return this.http.post(this.apiBase + 'agregarSede', {
      "NOMBRE_SEDE": NOMBRE_SEDE
    } )
  }
  //agregarcomuna
  agregarcomuna(NOMBRE_COMUNA){
    return this.http.post(this.apiBase + 'agregarComuna', {
      "NOMBRE_COMUNA": NOMBRE_COMUNA
    } )
  }
  //agregargenero
  agregargenero(NOMBRE_GENERO){
    return this.http.post(this.apiBase + 'agregarGenero', {
      "NOMBRE_GENERO": NOMBRE_GENERO
    } )
  }

  //LISTAR PREGUNTAS.

  getPregunta1(): Observable<any>
  {
    return this.http.get(this.apiBase+"verpregunta1").pipe();

  }
  getPregunta2(): Observable<any>
  {
    return this.http.get(this.apiBase+"verpregunta2").pipe();

  }
  getPregunta3(): Observable<any>
  {
    return this.http.get(this.apiBase+"verpregunta3").pipe();

  }

  //AGREGAR PREGUNTAS

  agregarPregunta1(PREGUNTA1, RESPUESTA1, RESPUESTA2, RESPUESTA3, RESPUESTACORRECTA, ID_PUBLICACION) {
    return this.http.post(this.apiBase + 'agregarpregunta1', { 
        "PREGUNTA1":PREGUNTA1,
        "RESPUESTA1":RESPUESTA1,
        "RESPUESTA2":RESPUESTA2,
        "RESPUESTA3": RESPUESTA3,
        "RESPUESTACORRECTA":RESPUESTACORRECTA,
        "ID_PUBLICACION": ID_PUBLICACION})
    
  }
  agregarPregunta2(PREGUNTA2, RESPUESTA1, RESPUESTA2, RESPUESTA3, RESPUESTACORRECTA, ID_PUBLICACION) {
    return this.http.post(this.apiBase + 'agregarpregunta2', { 
        "PREGUNTA2":PREGUNTA2,
        "RESPUESTA1":RESPUESTA1,
        "RESPUESTA2":RESPUESTA2,
        "RESPUESTA3": RESPUESTA3,
        "RESPUESTACORRECTA":RESPUESTACORRECTA,
        "ID_PUBLICACION": ID_PUBLICACION})
    
  }
  agregarPregunta3(PREGUNTA3, RESPUESTA1, RESPUESTA2, RESPUESTA3, RESPUESTACORRECTA, ID_PUBLICACION) {
    return this.http.post(this.apiBase + 'agregarpregunta3', { 
        "PREGUNTA3":PREGUNTA3,
        "RESPUESTA1":RESPUESTA1,
        "RESPUESTA2":RESPUESTA2,
        "RESPUESTA3": RESPUESTA3,
        "RESPUESTACORRECTA":RESPUESTACORRECTA,
        "ID_PUBLICACION": ID_PUBLICACION})
    
  }

   
  agregarNota(CLASIFICACION, ID_PUBLICACION){
    return this.http.post(this.apiBase + 'agregarNota', { 
    "CLASIFICACION":CLASIFICACION,
    "ID_PUBLICACION": ID_PUBLICACION})

  }

  obtenerNota(ID_PUBLICACION){
    return this.http.post(this.apiBase + 'clasificacion', { 
    "ID_PUBLICACION": ID_PUBLICACION})

  }
  
}
