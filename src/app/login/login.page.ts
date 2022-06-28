import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api: ServiceService, public alerta:AlertController, public router:Router
  ) { }

  alert;
  usuario: any = {
    RUT_USUARIO: "",
    PASSWORD_USUARIO: "",
  }

  ngOnInit() {
    
  }

  ingresar(){
    this.api.login(this.usuario.RUT_USUARIO, this.usuario.PASSWORD_USUARIO).subscribe((res) =>{
      console.log(res['msg']);
      console.log(res['RUT_USUARIO']);

      if(res['msg']){
        let DataUser:any=res['RUT_USUARIO'];
        this.api.setCurrentUser(DataUser);
        this.router.navigate(['/home'])
        this.usuario.RUT_USUARIO = "";
        this.usuario.PASSWORD_USUARIO = "";
      }else{
        this.error("");
        this.usuario.RUT_USUARIO = "";
        this.usuario.PASSWORD_USUARIO = "";
      }
    })

  }
  async error(mensaje) {
    this.alert = await this.alerta.create({
     cssClass: 'my-custom-class',
     header: 'Ingreso incorrecto',
     subHeader: 'Vuelva a intentarlo',
     message: mensaje,
     buttons: ['Aceptar']
   });
  
   await this.alert.present();
  
  }

  showPassword = false;

  mostrarContrasena(): void{

    this.showPassword = !this.showPassword;
  }


}
