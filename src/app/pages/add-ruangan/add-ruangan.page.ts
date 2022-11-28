import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-ruangan',
  templateUrl: './add-ruangan.page.html',
  styleUrls: ['./add-ruangan.page.scss'],
})
export class AddRuanganPage implements OnInit {

  newRuangan: any = {}
  namaR: any
  kapasitasR: any
  id: any

  constructor(public modalCtrl: ModalController, public strgService: StorageService, public activatedRoute: ActivatedRoute, public storage: Storage) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  ionViewWillEnter() {
    this.getListRuangan();
  }

  async addR() {
    this.newRuangan = ({namaRuang: this.namaR, kapasitas: this.kapasitasR, idGedung: this.id})
    console.log(this.newRuangan);
    let uid = this.namaR + this.id
    
    if(uid) {
      await this.strgService.addRuangan(uid, this.newRuangan)
    }else{
      console.log("can't save empty task");
    } 
    
    this.dismissR()
  }
  
  async dismissR() {
    let topLoader = await this.modalCtrl.getTop();
    while (topLoader) {
      if (!(await topLoader.dismiss())) {
        // throw new Error('Could not dismiss the topmost loader. Aborting...');
        break;
      }
      topLoader = await this.modalCtrl.getTop();
    }
  }

  async getListRuangan() {
    let keys = await this.storage.keys();
    keys.forEach((key: any) => {
      console.log(key);
        this.storage.get(key).then((ruang: any) => {
          console.log(ruang);
          if(ruang.key == this.id) {
            this.newRuangan.push(ruang);
          }
        });
    });
  }
}
