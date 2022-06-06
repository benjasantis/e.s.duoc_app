import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private api: ServiceService, public router: Router, public alertController:AlertController) { }

  alert;

  usuario: any = {


    email: "",
    password: "",
   

  }

  ngOnInit() {
  }

 /* Registrar() {

      this.api.crearUsuario(this.usuario.email, this.usuario.password).subscribe((resultado) => {
        console.log(resultado);
      }
      );


  }*/

  Registrar() {

    if (this.usuario.email == "") {

      this.error("");

    }
    else if (this.usuario.password == "") {
      this.error("");

    }
    
    else {
      this.api.crearUsuario(this.usuario.email, this.usuario.password).subscribe((resultado) => {
        console.log(resultado);
        this.router.navigate(['/login']);
        this.presentAlert("");

      }
      )
    };


  }
  

  async presentAlert(mensaje) {
    this.alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usuario Creado',
      subHeader: 'Gracias por Registrarte. Ya puedes iniciar Sesion',
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



}
