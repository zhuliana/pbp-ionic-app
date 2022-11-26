import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRuanganPage } from './add-ruangan.page';

const routes: Routes = [
  {
    path: '',
    component: AddRuanganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRuanganPageRoutingModule {}
