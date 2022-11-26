import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRuanganPage } from './edit-ruangan.page';

const routes: Routes = [
  {
    path: '',
    component: EditRuanganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRuanganPageRoutingModule {}
