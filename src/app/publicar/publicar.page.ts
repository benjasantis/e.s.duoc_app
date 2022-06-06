import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})
export class PublicarPage implements OnInit {

  constructor(private api: ServiceService, public router: Router, public alertController:AlertController) { }

  alert;


  usuario: any = {

    titulo: "",
    descripcion: "",
    carrera: "",
    asignatura: "",
    

  }


  ngOnInit() {
  }

  publicar() {

    if (this.usuario.titulo == "") {

      this.error("");

    }
    else if (this.usuario.carrera == "") {
      this.error("");

    }
    else if (this.usuario.asignatura == "") {
      this.error("");

    }
    else if (this.usuario.descripcion == "") {
      this.error("");

    }
    
    else {
      this.api.publicacion(this.usuario.titulo,this.usuario.descripcion, this.usuario.carrera,this.usuario.asignatura ).subscribe((resultado) => {
        console.log(resultado);
        this.router.navigate(['/home']);
        this.presentAlert("");

      }
      )
    };


  }
  

  async presentAlert(mensaje) {
    this.alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Quiz Publicado',
      subHeader: 'Tu Quiz a sido publicado con exito',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await this.alert.present();

  }

  async error(mensaje) {
    this.alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Faltan Campos',
      subHeader: 'Favor de completar todos los campos solicitados',
      message: mensaje,
      buttons: ['Reintentar']
    });

    await this.alert.present();

  }


  /*publicar() {

    this.api.publicacion(this.usuario.titulo,this.usuario.descripcion, this.usuario.carrera,this.usuario.asignatura ).subscribe((resultado) => {
      console.log(resultado);
    }
    );*/

  




}




