import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarsystemaPage } from './administrarsystema.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarsystemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarsystemaPageRoutingModule {}
