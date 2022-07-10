import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  constructor(private router: Router, private api: ServiceService, public alerta: AlertController) { }

  ngOnInit() {
    this.api.getPregunta1().subscribe((resultado)=>{
      let userCurrent = localStorage.getItem('id_public');
      this.pregunta1 = resultado.filter(function(resultado){
        return resultado.ID_PUBLICACION === JSON.parse(userCurrent);
      });
    });
    this.api.getPregunta2().subscribe((resultado)=>{
      let userCurrent = localStorage.getItem('id_public');
      this.pregunta2 = resultado.filter(function(resultado){
        return resultado.ID_PUBLICACION === JSON.parse(userCurrent);
      });
    });
    this.api.getPregunta3().subscribe((resultado)=>{
      let userCurrent = localStorage.getItem('id_public');
      this.pregunta3 = resultado.filter(function(resultado){
        return resultado.ID_PUBLICACION === JSON.parse(userCurrent);
      });
    });

    
  }

  pregunta1:any;
  pregunta2:any;
  pregunta3:any;
  alert;


  finalizar(){
    this.terminar()
    this.router.navigate(['/detallecomunidad'])    
  }

  async terminar() {
    this.alert = await this.alerta.create({
     cssClass: 'my-custom-class',
     header: 'Quiz Finalizado',
     subHeader: 'Seria de gran ayuda que calificaras la publicacion y quiz visitado',
     
     buttons: ['Aceptar']
   });
  
   await this.alert.present();
  
  }


}
