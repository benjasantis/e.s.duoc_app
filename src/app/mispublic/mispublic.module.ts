import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MispublicPageRoutingModule } from './mispublic-routing.module';

import { MispublicPage } from './mispublic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MispublicPageRoutingModule
  ],
  declarations: [MispublicPage]
})
export class MispublicPageModule {}
