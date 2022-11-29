import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-edit-gedung',
  templateUrl: './edit-gedung.page.html',
  styleUrls: ['./edit-gedung.page.scss'],
})
export class EditGedungPage implements OnInit {
  @Input() gedung: any;

  newGedung = {}
  namaG: any
  prodiG: any

  constructor(public modalCtrl: ModalController, public strgService: StorageService) { }

  ngOnInit() {
    this.namaG = this.gedung.value.namaGedung
    this.prodiG = this.gedung.value.prodi
    // console.log(this.gedung);
    
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async edit() {
    this.newGedung = ({namaGedung: this.namaG, prodi: this.prodiG})
    console.log(this.newGedung);
    let uid = this.gedung.key
    await this.strgService.editGedung(uid, this.newGedung) 

    this.dismiss()
  }
}