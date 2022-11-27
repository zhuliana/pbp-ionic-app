import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { AddGedungPage } from '../add-gedung/add-gedung.page';
import { EditGedungPage } from '../edit-gedung/edit-gedung.page';

@Component({
  selector: 'app-gedung',
  templateUrl: './gedung.page.html',
  styleUrls: ['./gedung.page.scss'],
})
export class GedungPage {

  gedungs: any[] = []

  constructor(public modalCtlr: ModalController, public strgService: StorageService) {
    this.getAllGedung()
   }

  async addNewGedung() {
    const modal = await this.modalCtlr.create({
      component: AddGedungPage
    })

    modal.onDidDismiss().then((newGedungObj) => {
      this.getAllGedung()
    })

    return await modal.present()
  }

  delete(key: any){
    this.strgService.deleteGedung(key)
    this.getAllGedung()
  }

  getAllGedung() {
    this.gedungs = this.strgService.getAllgedung()
    console.log(this.strgService.getAllgedung());
  }

  async updateGedung(selectedGedung: any) {
    const modal = await this.modalCtlr.create({
      component: EditGedungPage,
      componentProps: {gedung: selectedGedung}
    })

    modal.onDidDismiss().then(() => {
      this.getAllGedung()
    })

    return await modal.present()
  }

}
