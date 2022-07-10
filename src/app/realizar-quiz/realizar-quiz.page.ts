import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-realizar-quiz',
  templateUrl: './realizar-quiz.page.html',
  styleUrls: ['./realizar-quiz.page.scss'],
})
export class RealizarQuizPage implements OnInit {
 
  constructor(private router: Router, private api: ServiceService, public alerta: AlertController) {}
 
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

  escogida:any={
    escogida:"",
  }
  escogida2:any={
    escogida:"",
  }
  escogida3:any={
    escogida:"",
  }
  
 


  corregir(){
    var cantidad = 0;
    const id = (<HTMLInputElement>document.getElementById("rcorrecta")).value;
    const id2 = (<HTMLInputElement>document.getElementById("rcorrecta2")).value;
    const id3 = (<HTMLInputElement>document.getElementById("rcorrecta3")).value;

    if(this.escogida.escogida == ""){ 
      this.error();
    }else if(this.escogida2.escogida == ""){
      this.error();
    }else if(this.escogida3.escogida == ""){
      this.error();
    }
    else{if(id == this.escogida.escogida){
      cantidad++;
        }if(id2 == this.escogida2.escogida){
     cantidad++;

        }if(id3 == this.escogida3.escogida){
      cantidad++;
      console.log(cantidad)
        }
    this.escogida.escogida = "",
    this.escogida2.escogida ="",
    this.escogida3.escogida ="",
    this.resultados(cantidad, this.router.navigate(['/resultados'])); 

    }
     
  }

  alert;
  
    async resultados(mensaje, ir) {
      this.alert = await this.alerta.create({
       cssClass: 'my-custom-class',
       header: 'Su Puntuacion es: ' + mensaje,
       subHeader: 'Revisemos las respuestas correctas',
       
       buttons: ['Aceptar']
     });
    
     await this.alert.present();
    
    }

    async error() {
      this.alert = await this.alerta.create({
       cssClass: 'my-custom-class',
       header: 'Error',
       subHeader: 'Faltan respuesta que seleccionar',
       
       buttons: ['Completar']
     });
    
     await this.alert.present();
    
    }

}
