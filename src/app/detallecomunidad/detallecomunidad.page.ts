import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detallecomunidad',
  templateUrl: './detallecomunidad.page.html',
  styleUrls: ['./detallecomunidad.page.scss'],
})
export class DetallecomunidadPage implements OnInit {

  constructor(private api: ServiceService, public alerta: AlertController, public router: Router) { }

  alert;
  pub: any;
  com: any;
  cla: any;
  notas: any[]=[1,2,3,4,5]

  comentario: any = {
    CONT_COMENTARIO: "",
  }

  nota: any = {
    CLASIFICACION: "",
  }



  ngOnInit() {
   
    this.api.listarPublicaciones().subscribe((res) => {
      let idCurrent = localStorage.getItem('id_public');
      this.pub = res.filter(function (res) {
        return res.ID_PUBLIC === JSON.parse(idCurrent);
      });
      this.api.obtenerNota(localStorage.getItem('id_public')).subscribe((respuesta) => {
        this.cla = respuesta['CLASIFICACION'];
      })
    });
    this.api.listarComentarios().subscribe((res) => {
      let idCurrent = localStorage.getItem('id_public');
      this.com = res.filter(function (res) {
        return res.ID_PUBLIC === JSON.parse(idCurrent);
      });
      console.log(localStorage.getItem('id_public'));
    });

  }

  


  volver() {
    this.api.salirPublicacion();
  }

  agregarComentario() {
    if (this.comentario.CONT_COMENTARIO == "") {
      this.error("");
    }
    else if (this.comentario.ID_PUBLICACION == "") {
      this.error("");
    }
    else {

      let idCurrent = localStorage.getItem('id_public');

      this.api.comentario(this.comentario.CONT_COMENTARIO, idCurrent).subscribe((resultado) => {
        console.log(resultado)
        this.presentAlert("");
        this.router.navigate(['/detallecomunidad']);
        this.comentario.CONT_COMENTARIO = "";
        this.api.listarComentarios().subscribe((res) => {
          let idCurrent = localStorage.getItem('id_public');
          this.com = res.filter(function (res) {
            return res.ID_PUBLIC === JSON.parse(idCurrent);
          });
        });
      })
    }

  }


  async presentAlert(mensaje) {
    this.alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Comentario Agregado',
      subHeader: 'Tu Comentario ha sido ingresado de forma exitosa',
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

  async calificado(mensaje) {
    this.alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Calificacion Agregada',
      subHeader: 'Calificacion agregada exitosamente',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await this.alert.present();

  }



  realizarQuiz() {
    this.router.navigate(['/realizar-quiz'])
  }

  calificar() {
    if (this.nota.CLASIFICACION == "") {
      this.error("");
    } else if (this.nota.ID_PUBLICACION == "") {
      this.error("");
    } else {
      this.api.agregarNota(this.nota.CLASIFICACION, localStorage.getItem('id_public')).subscribe((resultado) => {
        console.log(resultado)
        this.nota.CLASIFICACION = "";
        this.router.navigate(['/detallecomunidad'])
        this.calificado("");
        this.api.obtenerNota(localStorage.getItem('id_public')).subscribe((respuesta) => {
        this.cla = respuesta['CLASIFICACION'];
        this.api.listarPublicaciones().subscribe((res) => {
          let idCurrent = localStorage.getItem('id_public');
          this.pub = res.filter(function (res) {
            return res.ID_PUBLIC === JSON.parse(idCurrent);
          });
        })
        this.api.listarComentarios().subscribe((res) => {
          let idCurrent = localStorage.getItem('id_public');
          this.com = res.filter(function (res) {
            return res.ID_PUBLIC === JSON.parse(idCurrent);
          });
        })
        
  
  
        })
      });
    }

  }

}
