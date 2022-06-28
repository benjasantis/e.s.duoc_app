import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregarinfo',
  templateUrl: './agregarinfo.page.html',
  styleUrls: ['./agregarinfo.page.scss'],
})
export class AgregarinfoPage implements OnInit {

  constructor(private api: ServiceService,public alerta:AlertController, public router:Router) { }

  alert;

  info:any={
    EMAIL:"",
    PNOMBRE_USUARIO:"",
    PAPELLIDO_USUARIO:"",
    SAPELLIDO_USUARIO:"",
    TELEFONO_USUARIO:"",
    DIRECCION_USUARIO:"",
    NOMBRE_GENERO:"",
    NOMBRE_COMUNA:"",
    NOMBRE_CARRERA:"",
    NOMBRE_SEDE:"",
    RUT_USUARIO:this.api.getCurrentUser(),
  }

  asignatura:any;
  carrera:any;
  sede:any;
  genero:any;
  comuna:any;

  ngOnInit()  {

    this.api.listarCarreras().subscribe((resultado)=>{
      console.log(resultado);
      this.carrera = resultado;
    })
    this.api.listarSedes().subscribe((resultado)=>{
      console.log(resultado);
      this.sede = resultado;
    })
    this.api.genero().subscribe((resultado)=>{
      console.log(resultado);
      this.genero = resultado;
    });
    this.api.comuna().subscribe((resultado)=>{
      console.log(resultado);
      this.comuna = resultado;
    })

    console.log(this.api.getCurrentUser());

  }
  publicar() {

    if (this.info.PAPELLIDO_USUARIO == "") {
      this.error("");

    }
    else if (this.info.EMAIL == "") {
      this.error("");

    }
    else if 
      (this.info.PNOMBRE_USUARIO == "") {

        this.error("");
    }
    else if (this.info.SAPELLIDO_USUARIO == "") {
      this.error("");

    }else if (this.info.TELEFONO_USUARIO == "") {
      this.error("");

    }else if (this.info.DIRECCION_USUARIO == "") {
      this.error("");

    }else if (this.info.NOMBRE_GENERO == "") {
      this.error("");

    }else if (this.info.NOMBRE_COMUNA == "") {
      this.error("");

    }else if (this.info.NOMBRE_CARRERA == "") {
      this.error("");

    }else if (this.info.NOMBRE_SEDE == "") {
      this.error("");

    }

    
    else {
      this.api.agregarInformacion(this.info.EMAIL,this.info.PNOMBRE_USUARIO,this.info.PAPELLIDO_USUARIO,this.info.SAPELLIDO_USUARIO,this.info.TELEFONO_USUARIO,this.info.DIRECCION_USUARIO,this.info.NOMBRE_GENERO,this.info.NOMBRE_COMUNA,this.info.NOMBRE_CARRERA,this.info.NOMBRE_SEDE,this.info.RUT_USUARIO).subscribe((resultado) => {
        console.log(resultado);
        this.router.navigate(['/home']);
        this.presentAlert("");

      }
      )
    };


  }
  
  async presentAlert(mensaje) {
    this.alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Quiz Publicado',
      subHeader: 'Tu Informacion se ha registrado con exito',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await this.alert.present();

  }

  async error(mensaje) {
    this.alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Faltan Campos',
      subHeader: 'Favor de completar todos los campos solicitados',
      message: mensaje,
      buttons: ['Reintentar']
    });

    await this.alert.present();

  }


}
