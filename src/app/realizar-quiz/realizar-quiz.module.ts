import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarQuizPageRoutingModule } from './realizar-quiz-routing.module';

import { RealizarQuizPage } from './realizar-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarQuizPageRoutingModule
  ],
  declarations: [RealizarQuizPage]
})
export class RealizarQuizPageModule {}
