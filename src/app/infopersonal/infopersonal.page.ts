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

  actualizarinfo() {
    this.api.infoPersonal().subscribe((res) => {
      let rut = localStorage.getItem('UsuarioLogueado');
      this.info = res.filter(function (res) {
        return res.RUT_USUARIO === JSON.parse(rut);
      });
    });
  }

  /*actualizar(RUT_USUARIO){
    if(RUT_USUARIO === JSON.parse(localStorage.getItem('UsuarioLogueado'))){
      this.router.navigate(['/actualizardatos']);
      console.log(localStorage.getItem('UsuarioLogueado'));
      console.log(RUT_USUARIO);
      
    }else{
      this.router.navigate(['/infopersonal']);
      console.log("error")
      console.log(localStorage.getItem('UsuarioLogueado'));
      console.log(RUT_USUARIO);
      
    }
  }

  agregar(RUT_USUARIO){
    if(RUT_USUARIO === JSON.parse(localStorage.getItem('UsuarioLogueado'))){
      this.router.navigate(['/infopersonal']);
    }else{
      
      this.router.navigate(['/agregarinfo']);
      
    }
  }*/
}
