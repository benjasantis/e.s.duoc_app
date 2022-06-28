import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarusuariosPageRoutingModule } from './administrarusuarios-routing.module';

import { AdministrarusuariosPage } from './administrarusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarusuariosPageRoutingModule
  ],
  declarations: [AdministrarusuariosPage]
})
export class AdministrarusuariosPageModule {}
