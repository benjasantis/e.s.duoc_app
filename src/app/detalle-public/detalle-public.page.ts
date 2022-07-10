import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-detalle-public',
  templateUrl: './detalle-public.page.html',
  styleUrls: ['./detalle-public.page.scss'],
})
export class DetallePublicPage implements OnInit {
  constructor(
    private api: ServiceService,
    public alerta: AlertController,
    public router: Router
  ) {}

  pub: any;
  com: any;
  preg1:any;
  pregunta1:any;
  alert;
  pdf0jb = null;
  

  ngOnInit() {
    this.api.listarPublicaciones().subscribe((res) => {
      let idCurrent = localStorage.getItem('id_public');
      this.pub = res.filter(function (res) {
        return res.ID_PUBLIC === JSON.parse(idCurrent);
      });
    });
    this.api.listarComentarios().subscribe((res) => {
      let idCurrent = localStorage.getItem('id_public');
      this.com = res.filter(function (res) {
        return res.ID_PUBLIC === JSON.parse(idCurrent);
      });
    });
    this.api.getPregunta1().subscribe((resultado)=>{
      let userCurrent = localStorage.getItem('id_public');
      this.pregunta1 = resultado.filter(function(resultado){
        return resultado.ID_PUBLICACION === JSON.parse(userCurrent);
      });
      console.log(this.pregunta1[0]['ID_PREGUNTA1'])
    });
  }

  volver() {
    this.api.salirPublicacion();
  }

  delete(ID_PUBLIC) {
    this.api.eliminar(ID_PUBLIC).subscribe((resultado) => {
      console.log(resultado);
      this.router.navigate(['/mispublic']);
    });
  }

  quiz(){
    if(this.pregunta1[0]['ID_PREGUNTA1'] != ""){
      this.error();
    }else{this.router.navigate(['/agregar-quiz'])}
    
  }

  pdfDownload(titulo, descripcion, contenido, asignatura) {
    const generatePDF = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              ['Titulo', 'Descripcion', 'Contenido', 'Asignatura'],
              [titulo, descripcion, contenido, asignatura],
            ],
          },
        },
      ],
    };
    const pdf = pdfMake.createPdf(generatePDF);

    pdf.open();
  }

  async error() {
    this.alert = await this.alerta.create({
     cssClass: 'my-custom-class',
     header: 'No se puede agregar Quiz',
     subHeader: 'Esta publicacion ya posee un quiz',
     
     buttons: ['Aceptar']
   });
  
   await this.alert.present();
  
  }

}
