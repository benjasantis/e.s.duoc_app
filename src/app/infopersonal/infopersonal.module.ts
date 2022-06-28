import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopersonalPageRoutingModule } from './infopersonal-routing.module';

import { InfopersonalPage } from './infopersonal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopersonalPageRoutingModule
  ],
  declarations: [InfopersonalPage]
})
export class InfopersonalPageModule {}
