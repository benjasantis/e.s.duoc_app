import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizardatosPage } from './actualizardatos.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizardatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizardatosPageRoutingModule {}
