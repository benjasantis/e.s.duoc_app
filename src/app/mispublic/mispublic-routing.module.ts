import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MispublicPage } from './mispublic.page';

const routes: Routes = [
  {
    path: '',
    component: MispublicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MispublicPageRoutingModule {}
