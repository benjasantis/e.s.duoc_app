import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})
export class PublicarPage implements OnInit {

  constructor(private api: ServiceService, public router: Router, public alertController:AlertController) { }

  alert;


  usuario: any = {

    TITULO_PUBLIC: "",
    DESC_PUBLIC: "",
    CONT_PUBLIC:"",
    NOMBRE_ASIGNATURA: "",
    NOMBRE_CARRERA: "",
    NOMBRE_SEDE:"",
    RUT_USUARIO: this.api.getCurrentUser()
    

  }

  asignatura:any;
  carrera:any;
  sede:any;




  ngOnInit() {
    this.api.listarAsignaturas().subscribe((resultado)=>{
      console.log(resultado);
      this.asignatura = resultado;
    });
    this.api.listarCarreras().subscribe((resultado)=>{
      console.log(resultado);
      this.carrera = resultado;
    })
    this.api.listarSedes().subscribe((resultado)=>{
      console.log(resultado);
      this.sede = resultado;
    })

  }

  publicar() {

    if (this.usuario.TITULO_PUBLIC == "") {

      this.error("");

    }
    else if (this.usuario.DESC_PUBLIC == "") {
      this.error("");

    }
    else if (this.usuario.CONT_PUBLIC == "") {
      this.error("");

    }
    else if (this.usuario.NOMBRE_ASIGNATURA == "") {
      this.error("");

    }
    else if (this.usuario.NOMBRE_CARRERA == "") {
      this.error("");

    }
    else if (this.usuario.NOMBRE_SEDE == "") {
      this.error("");

    }
    else if (this.usuario.RUT_USUARIO == "") {
      this.error("");

    }
    
    else {
      this.api.publicacion(this.usuario.TITULO_PUBLIC,this.usuario.DESC_PUBLIC, this.usuario.CONT_PUBLIC, this.usuario.NOMBRE_ASIGNATURA,this.usuario.NOMBRE_CARRERA,this.usuario.NOMBRE_SEDE,this.usuario.RUT_USUARIO ).subscribe((resultado) => {
        console.log(resultado);
        this.router.navigate(['/home']);
        this.presentAlert("");

      }
      )
    };


  }
  

  async presentAlert(mensaje) {
    this.alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Quiz Publicado',
      subHeader: 'Tu Quiz a sido publicado con exito',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await this.alert.present();

  }

  async error(mensaje) {
    this.alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Faltan Campos',
      subHeader: 'Favor de completar todos los campos solicitados',
      message: mensaje,
      buttons: ['Reintentar']
    });

    await this.alert.present();

  }

  

}




