import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api: ServiceService, public alerta:AlertController, public router:Router
  ) { }

  alert;
  usuario: any = { email:"", password:""}

  ngOnInit() {
  }
  /*
  ingresar()
  {
    this.api.postLogin(this.usuario.email, this.usuario.password).subscribe((resultado)=>{
      
      console.log(resultado.result)

      if(resultado.result == "Login incorrecto")  
      {
        console.log("No puede ingresar")

        this.error("");

        this.usuario.email='';
        this.usuario.password='';
         
      }
      else if(this.usuario.email == ""){

        this.error("");

      }
      else if(this.usuario.password == ""){
        this.error("");
      }

      else {

        
        console.log("Ingreso Correcto")
        this.router.navigate(['/home']);
        console.log(resultado.result)
        this.usuario.email='';
        this.usuario.password='';
        
      }

    })


  }*/

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
