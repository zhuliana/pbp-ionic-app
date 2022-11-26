import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGedungPage } from './edit-gedung.page';

const routes: Routes = [
  {
    path: '',
    component: EditGedungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGedungPageRoutingModule {}
