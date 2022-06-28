import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePublicPage } from './detalle-public.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePublicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePublicPageRoutingModule {}
