import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarinfoPageRoutingModule } from './agregarinfo-routing.module';

import { AgregarinfoPage } from './agregarinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarinfoPageRoutingModule
  ],
  declarations: [AgregarinfoPage]
})
export class AgregarinfoPageModule {}
