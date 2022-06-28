import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mispublic',
  templateUrl: './mispublic.page.html',
  styleUrls: ['./mispublic.page.scss'],
})
export class MispublicPage implements OnInit {

  constructor(private api: ServiceService,public alerta:AlertController, public router:Router) { }

  pub: any;

  publicaciones: any = {
    ID_PUBLIC: "", 
  }
  
  detalle: any = {

    ID_PUBLIC: "",
  }

  

  ngOnInit() {
    this.api.listarPublicaciones().subscribe((resultado)=>{
      let userCurrent = localStorage.getItem('UsuarioLogueado');
      this.pub = resultado.filter(function(resultado){
        return resultado.RUT_USUARIO === JSON.parse(userCurrent);
      });
      });
      
    }

  actualizar(){
    this.api.listarPublicaciones().subscribe((resultado)=>{
      let userCurrent = localStorage.getItem('UsuarioLogueado');
      this.pub = resultado.filter(function(resultado){
        return resultado.RUT_USUARIO === JSON.parse(userCurrent);
      });
      });
  }

  /*delete(ID_PUBLIC){
    this.api.eliminar(ID_PUBLIC).subscribe((resultado) => {
      console.log(resultado);
  });
  this.api.listarPublicaciones().subscribe((resultado)=>{
    let userCurrent = localStorage.getItem('UsuarioLogueado');
    this.pub = resultado.filter(function(resultado){
      return resultado.RUT_USUARIO === JSON.parse(userCurrent);
    });
    });
  }*/


  abrirPublic(ID_PUBLIC){

    this.api.miPublic(ID_PUBLIC).subscribe((res) =>{

      if(res['id']){
        let id:any=res['ID_PUBLIC'];
        this.api.setIdPublicacion(id);
        this.router.navigate(['/detalle-public'])
      }else{
        this.error("");
       
      }
    })
  }

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
