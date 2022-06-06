import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../Service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {

  constructor(private api: ServiceService, public router:Router) { }

  ngOnInit() {
  }

  pub:any;

  comunidad(){

    this.api.listarPublicaciones().subscribe((resultado)=>{
      console.log(resultado);
      this.pub = resultado;
    })

  }

}
