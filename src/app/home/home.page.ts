import { Component } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private api:ServiceService) {
    
  }

  info:any;

  ngOnInit() {
    this.api.infoPersonal().subscribe((res) => {
      let rut = localStorage.getItem('UsuarioLogueado');
      this.info = res.filter(function (res) {
        return res.RUT_USUARIO === JSON.parse(rut);
      });
    });
  }


  cerrarSesion(){
    this.api.logout();
  }

  



}
