import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRuanganPageRoutingModule } from './edit-ruangan-routing.module';

import { EditRuanganPage } from './edit-ruangan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRuanganPageRoutingModule
  ],
  declarations: [EditRuanganPage]
})
export class EditRuanganPageModule {}
