import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarinfoPage } from './agregarinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarinfoPageRoutingModule {}
