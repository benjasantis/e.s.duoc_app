import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infopersonal',
  templateUrl: './infopersonal.page.html',
  styleUrls: ['./infopersonal.page.scss'],
})
export class InfopersonalPage implements OnInit {
  constructor(
    private api: ServiceService,
    public alerta: AlertController,
    public router: Router
  ) {}

  alert;
  info: any;
  detalle: any = {
    RUT_USUARIO: '',
  };

  ngOnInit() {
    this.api.infoPersonal().subscribe((res) => {
      let rut = localStorage.getItem('UsuarioLogueado');
      this.info = res.filter(function (res) {
        return res.RUT_USUARIO === JSON.parse(rut);
      });
    });
  }

  actualizardatos(){
    this.api.infoPersonal().subscribe((res) => {
      let rut = localStorage.getItem('UsuarioLogueado');
      this.info = res.filter(function (res) {
        return res.RUT_USUARIO === JSON.parse(rut);
      });
    });
  }

  actualizarinfo() {
    if(this.info == ""){
      this.error1();
    }else{
      this.api.infoPersonal().subscribe((res) => {
        let rut = localStorage.getItem('UsuarioLogueado');
        this.info = res.filter(function (res) {
          return res.RUT_USUARIO === JSON.parse(rut);
          
        });this.router.navigate(['/actualizardatos'])
      });
    }
    
  }

  agregar(){
    if(this.info == ""){
      this.router.navigate(['/agregarinfo']);
    }else{
      
      this.error();
    }
  }

  async error() {
    this.alert = await this.alerta.create({
     cssClass: 'my-custom-class',
     header: 'Usted ya posee informacion agregada',
     subHeader: 'Solo puede actualizar informacion',
     
     buttons: ['Aceptar']
   });
  
   await this.alert.present();
  
  }
  async error1() {
    this.alert = await this.alerta.create({
     cssClass: 'my-custom-class',
     header: 'Usted aun no posee informacion agregada',
     subHeader: 'Una vez agregaga informacion puede actualizar',
     
     buttons: ['Aceptar']
   });
  
   await this.alert.present();
  
  }
}
