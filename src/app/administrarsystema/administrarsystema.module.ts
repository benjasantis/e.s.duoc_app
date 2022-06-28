import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarsystemaPageRoutingModule } from './administrarsystema-routing.module';

import { AdministrarsystemaPage } from './administrarsystema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarsystemaPageRoutingModule
  ],
  declarations: [AdministrarsystemaPage]
})
export class AdministrarsystemaPageModule {}
