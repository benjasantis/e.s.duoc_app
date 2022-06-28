import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private api: ServiceService,public alerta:AlertController, public router:Router) { }

  ngOnInit() {
  }

  alert;

  res : any = {
    PASSWORD_USUARIO : "",
    RUT_USUARIO : "",
  }

  restablecer(){
    if (this.res.PASSWORD_USUARIO == "") {
      this.error("");

    }
    else if (this.res.RUT_USUARIO == "") {
      this.error("");

    }
    else{
      this.api.actualizarPassword(this.res.RUT_USUARIO, this.res.PASSWORD_USUARIO ).subscribe((resultado) => {
        console.log(resultado);
        this.presentAlert();
        this.router.navigate(['/login'])

  
      })
      }
  }

  async presentAlert() {
    const alert = await this.alerta.create({
      header: 'Se ha restalecido su password con exito',
      buttons: ['OK']
    });
    alert.present()
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

  showPassword = false;

  mostrarContrasena(): void{

    this.showPassword = !this.showPassword;
  }



}
