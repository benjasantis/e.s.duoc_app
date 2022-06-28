import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizardatosPageRoutingModule } from './actualizardatos-routing.module';

import { ActualizardatosPage } from './actualizardatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizardatosPageRoutingModule
  ],
  declarations: [ActualizardatosPage]
})
export class ActualizardatosPageModule {}
