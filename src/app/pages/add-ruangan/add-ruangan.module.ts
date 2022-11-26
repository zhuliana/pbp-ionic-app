import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRuanganPageRoutingModule } from './add-ruangan-routing.module';

import { AddRuanganPage } from './add-ruangan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRuanganPageRoutingModule
  ],
  declarations: [AddRuanganPage]
})
export class AddRuanganPageModule {}
