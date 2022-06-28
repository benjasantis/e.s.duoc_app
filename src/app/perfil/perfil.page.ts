import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private servicio:ServiceService) {
    
  }

  ngOnInit() {
     
    
  }

  



  

}
