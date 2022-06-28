import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePublicPageRoutingModule } from './detalle-public-routing.module';

import { DetallePublicPage } from './detalle-public.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePublicPageRoutingModule
  ],
  declarations: [DetallePublicPage]
})
export class DetallePublicPageModule {}
