import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarusuariosPage } from './administrarusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarusuariosPageRoutingModule {}
