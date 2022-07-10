import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {

  constructor(private api: ServiceService,public alerta:AlertController, public router:Router) { }

  ngOnInit() {

    this.api.listarPublicaciones().subscribe((resultado)=>{
      this.pub = resultado;
    })
  
    }


  pub:any;


  comunidad(){

    this.api.listarPublicaciones().subscribe((resultado)=>{
      this.pub = resultado;
    })
      
    }

    abrirPublic(ID_PUBLIC){

      this.api.miPublic(ID_PUBLIC).subscribe((res) =>{
  
        
          this.api.setIdPublicacion(res['ID_PUBLIC']);
          this.router.navigate(['/detallecomunidad'])
          
    })}
    
  
    alert;
  
    async error(mensaje) {
      this.alert = await this.alerta.create({
       cssClass: 'my-custom-class',
       header: 'Publicacion no encontrada',
       subHeader: 'Vuelva a intentarlo',
       message: mensaje,
       buttons: ['Aceptar']
     });
    
     await this.alert.present();
    
    }

  
}

  

  


