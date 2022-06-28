import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-administrarusuarios',
  templateUrl: './administrarusuarios.page.html',
  styleUrls: ['./administrarusuarios.page.scss'],
})
export class AdministrarusuariosPage implements OnInit {

  constructor(private api: ServiceService,public alerta:AlertController, public router:Router) {}
  

  usuario:any;
  info: any;
  fileName = 'ExcelSheet.xlsx';

  ngOnInit() {
    this.api.usuarios().subscribe((resultado)=>{
      this.usuario = resultado;
    })
  }

  actualizar(){
    this.api.usuarios().subscribe((resultado)=>{
      this.usuario = resultado;
    })
  }

  cerrarSesion(){
    this.api.logout();
  }

  delete(RUT_USUARIO){
    this.api.eliminarUsuario(RUT_USUARIO).subscribe((resultado) => {
      console.log(resultado);
      this.api.listarPublicaciones().subscribe((resultado)=>{
        this.usuario = resultado;
      })
  });}

  
  exportexcel(): void
  {
    /* pass here the table id */
    const element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
