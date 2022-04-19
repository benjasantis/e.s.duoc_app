import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(public alerta:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alerta.create({
      header: '¡Felicitaciones! su Registro ha sido exitoso, puede ingresar a su cuenta.',
      buttons: ['OK']
    });
    alert.present()
  }

}
