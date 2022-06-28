import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {

  constructor(private api: ServiceService, public alerta:AlertController, public router:Router
    ) { }
  
    alert;
    admin: any = {
      RUT_ADMINISTRADOR: "",
      CONTRASENA_ADMINISTRADOR: "",
     
  
    }
  
    ngOnInit() {
    }
  
    ingresar(){
      this.api.loginAdmin(this.admin.RUT_ADMINISTRADOR, this.admin.CONTRASENA_ADMINISTRADOR).subscribe((res) =>{
        console.log(res['msg']);
        console.log(res['RUT_ADMINISTRADOR']);
  
        if(res['msg']){
          let DataUser:any=res['RUT_ADMINISTRADOR'];
          this.api.setCurrentUser(DataUser);
          this.router.navigate(['/administrador'])
          this.admin.RUT_ADMINISTRADOR = "";
          this.admin.CONTRASENA_ADMINISTRADOR = "";
        }else{
          this.error("");
          this.admin.RUT_ADMINISTRADOR = "";
          this.admin.CONTRASENA_ADMINISTRADOR = "";
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
