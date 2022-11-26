import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGedungPageRoutingModule } from './edit-gedung-routing.module';

import { EditGedungPage } from './edit-gedung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditGedungPageRoutingModule
  ],
  declarations: [EditGedungPage]
})
export class EditGedungPageModule {}
