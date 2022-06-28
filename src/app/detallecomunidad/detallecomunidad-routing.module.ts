import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallecomunidadPage } from './detallecomunidad.page';

const routes: Routes = [
  {
    path: '',
    component: DetallecomunidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallecomunidadPageRoutingModule {}
