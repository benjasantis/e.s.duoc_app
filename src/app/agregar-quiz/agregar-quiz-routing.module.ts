import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarQuizPage } from './agregar-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarQuizPageRoutingModule {}
