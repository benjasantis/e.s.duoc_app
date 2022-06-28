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

}
