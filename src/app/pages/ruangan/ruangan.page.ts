import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AddRuanganPage } from '../add-ruangan/add-ruangan.page';
import { EditRuanganPage } from '../edit-ruangan/edit-ruangan.page';

@Component({
  selector: 'app-ruangan',
  templateUrl: './ruangan.page.html',
  styleUrls: ['./ruangan.page.scss'],
})
export class RuanganPage implements OnInit{

  ruangans: any[] = []
  id :any

  constructor(public modalCtlr: ModalController, public strgService: StorageService, public activatedRoute: ActivatedRoute, public router: Router) {
  }
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // this.getAllRuangan()
    // console.log(this.id);
  }

  ionViewWillEnter() {
    this.getAllRuangan()
  }

  async addNewRuangan() {
    const modal = await this.modalCtlr.create({
      component: AddRuanganPage
    })

    modal.onDidDismiss().then((newRuanganObj) => {
      this.getAllRuangan()
    })

    await modal.present()
  }

  delete(key: any){
    this.strgService.deleteRuangan(key)
    this.getAllRuangan()
  }

  getAllRuangan() {
    this.ruangans = this.strgService.getAllruangan(this.id)
    console.log(this.id);
  }
  
  // update ruangan
  async updateRuangan(selectedRuangan: any) {
    const modal = await this.modalCtlr.create({
      component: EditRuanganPage,
      componentProps: {ruangan: selectedRuangan}
    })

    modal.onDidDismiss().then(() => {
      this.getAllRuangan()
    })

    return await modal.present()
  }

}
