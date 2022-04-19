import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(public alerta:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alerta.create({
      header: 'Se ha restalecido su password con exito',
      buttons: ['OK']
    });
    alert.present()
  }

}
