import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-edit-ruangan',
  templateUrl: './edit-ruangan.page.html',
  styleUrls: ['./edit-ruangan.page.scss'],
})
export class EditRuanganPage implements OnInit {
  @Input() ruangan: any;

  newRuangan = {}
  namaR: any
  kapasitasR: any

  constructor(public modalCtrl: ModalController, public strgService: StorageService) { }

  ngOnInit() {
    this.namaR = this.ruangan.value.namaRuang
    this.kapasitasR = this.ruangan.value.kapasitas
    // console.log(this.ruangan);
    
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async edit() {
    this.newRuangan = ({namaRuang: this.namaR, kapasitas: this.kapasitasR})
    console.log(this.newRuangan);
    let uid = this.ruangan.key
    await this.strgService.editRuangan(uid, this.newRuangan) 

    this.dismiss()
  }
  

}
