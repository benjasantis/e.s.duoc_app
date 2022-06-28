import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-administrarsystema',
  templateUrl: './administrarsystema.page.html',
  styleUrls: ['./administrarsystema.page.scss'],
})
export class AdministrarsystemaPage implements OnInit {

  constructor(private api: ServiceService,public alerta:AlertController, public router:Router) { }

  ngOnInit() {
    this.api.listarAsignaturas().subscribe((resultado)=>{
      console.log(resultado);
      this.asignatura = resultado;
    });
    this.api.listarCarreras().subscribe((resultado)=>{
      console.log(resultado);
      this.carrera = resultado;
    })
    this.api.listarSedes().subscribe((resultado)=>{
      console.log(resultado);
      this.sede = resultado;
    })
    this.api.comuna().subscribe((resultado)=>{
      console.log(resultado);
      this.comuna = resultado;
    })
    this.api.genero().subscribe((resultado)=>{
      console.log(resultado);
      this.genero = resultado;
    })
  }

  fileNameAsignatura = 'ExcelSheetAsignaturas.xlsx';
  fileNameCarrera = 'ExcelSheetCarreras.xlsx';
  fileNameSede = 'ExcelSheetSedes.xlsx';
  fileNameGenero = 'ExcelSheetGeneros.xlsx';
  fileNameComuna = 'ExcelSheetComunas.xlsx';

  alert;

  asignatura:any;
  carrera:any;
  sede:any;
  genero:any;
  comuna:any;


  asig:any={
    NOMBRE_ASIGNATURA:"",
  }
  carr:any={
    NOMBRE_CARRERA:"",
  }

  sed:any={
    NOMBRE_SEDE:"",
  }

  gen:any={
    NOMBRE_GENERO:"",
  }

  com:any={
    NOMBRE_COMUNA:"",
  }

  //ASIGNATURA
  agregarAsignatura(){
    if (this.asig.NOMBRE_ASIGNATURA == "") {
      this.error("");

    }    
    else {

    this.api.agregarasignatura(this.asig.NOMBRE_ASIGNATURA ).subscribe((resultado) => {
      console.log(resultado)
      this.presentAlert("");
      this.asig.NOMBRE_ASIGNATURA = "";
    })   
    }
  }
  //CARRERA
  agregarCarrera(){
    if (this.carr.NOMBRE_CARRERA == "") {
      this.error("");

    }    
    else {

    this.api.agregarcarrera(this.carr.NOMBRE_CARRERA).subscribe((resultado) => {
      console.log(resultado)
      this.presentAlert("");
      this.carr.NOMBRE_CARRERA = "";
    })   
    }
  }
  //SEDE
  agregarSede(){
    if (this.sed.NOMBRE_SEDE == "") {
      this.error("");

    }   
    else {

    this.api.agregarsede(this.sed.NOMBRE_SEDE).subscribe((resultado) => {
      console.log(resultado)
      this.presentAlert("");
      this.sed.NOMBRE_SEDE = "";
    })   
    }
  }
  //GENERO
  agregarGenero(){
    if (this.gen.NOMBRE_GENERO == "") {
      this.error("");

    }
    else {

    this.api.agregargenero(this.gen.NOMBRE_GENERO ).subscribe((resultado) => {
      console.log(resultado)
      this.presentAlert("");
      this.gen.NOMBRE_GENERO = "";
    })   
    }
  }

  //COMUNA
  agregarComuna(){
    if (this.com.NOMBRE_COMUNA == "") {
      this.error("");

    }    
    else {

    this.api.agregarcomuna(this.com.NOMBRE_COMUNA).subscribe((resultado) => {
      console.log(resultado)
      this.presentAlert("");
      this.com.NOMBRE_COMUNA = "";
    })   
    }
  }


  async presentAlert(mensaje) {
    this.alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Agregar Valores',
      subHeader: 'Campo Agregado exitosamente',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await this.alert.present();

  }

  async error(mensaje) {
    this.alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Faltan Campos',
      subHeader: 'Favor de completar todos los campos solicitados',
      message: mensaje,
      buttons: ['Reintentar']
    });

    await this.alert.present();

  }
  exportAsignatura(): void
  {
    /* pass here the table id */
    const element = document.getElementById('asignatura-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameAsignatura);
 
  }
  exportCarrera(): void
  {
    /* pass here the table id */
    const element = document.getElementById('carrera-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameCarrera);
 
  }
  exportSede(): void
  {
    /* pass here the table id */
    const element = document.getElementById('sede-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameSede);
 
  }
  exportGenero(): void
  {
    /* pass here the table id */
    const element = document.getElementById('genero-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameGenero);
 
  }
  exportComuna(): void
  {
    /* pass here the table id */
    const element = document.getElementById('comuna-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameComuna);
 
  }
}
