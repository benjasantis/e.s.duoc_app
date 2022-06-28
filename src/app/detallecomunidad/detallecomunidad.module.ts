import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecomunidadPageRoutingModule } from './detallecomunidad-routing.module';

import { DetallecomunidadPage } from './detallecomunidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecomunidadPageRoutingModule
  ],
  declarations: [DetallecomunidadPage]
})
export class DetallecomunidadPageModule {}
