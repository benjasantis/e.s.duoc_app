import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarQuizPageRoutingModule } from './agregar-quiz-routing.module';

import { AgregarQuizPage } from './agregar-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarQuizPageRoutingModule
  ],
  declarations: [AgregarQuizPage]
})
export class AgregarQuizPageModule {}
