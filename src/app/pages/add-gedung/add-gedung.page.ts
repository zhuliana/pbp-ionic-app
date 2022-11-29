import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-gedung',
  templateUrl: './add-gedung.page.html',
  styleUrls: ['./add-gedung.page.scss'],
})
export class AddGedungPage implements OnInit {

  newGedung = {}
  namaG: any
  prodiG: any

  constructor(public modalCtrl: ModalController, public strgService: StorageService) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss(this.newGedung);
  }

  async add() {
    this.newGedung = ({namaGedung: this.namaG, prodi: this.prodiG})
    console.log(this.newGedung);
    let uid = this.namaG + this.prodiG

    if(uid) {
      await this.strgService.addGedung(uid, this.newGedung) 
    }else{
      console.log("can't save empty task");
    } 

    this.dismiss()
  }
}