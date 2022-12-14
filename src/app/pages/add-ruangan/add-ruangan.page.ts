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
  router: any;

  constructor(public strgService: StorageService, public activatedRoute: ActivatedRoute, public storage: Storage) {
    this.router = Router;
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  
  dismiss() {
    // console.log("dismiss");
    this.router.navigate(['/ruangan/'+ this.id])
    // await this.modalCtrl.dismiss(true);

    // let topLoader = await this.modalCtrl.getTop();
    // while (topLoader) {
    //   if (!(await topLoader.dismiss())) {
    //     // throw new Error('Could not dismiss the topmost loader. Aborting...');
    //     break;
    //   }
    //   topLoader = await this.modalCtrl.getTop();
    // }
  }

  // ionViewWillEnter() {
  //   this.getListRuangan();
  // }

  addR() {
    this.newRuangan = ({namaRuang: this.namaR, kapasitas: this.kapasitasR, idGedung: this.id})
    console.log(this.newRuangan);
    let uid = this.namaR + this.id
    
    if(uid) {
      this.strgService.addRuangan(uid, this.newRuangan)
    }else{
      console.log("can't save empty task");
    } 
    
    // this.dismiss()
  }
  
  async getListRuangan() {
    let keys = await this.storage.keys();
    keys.forEach((key: any) => {
      // console.log(key);
        this.storage.get(key).then((ruang: any) => {
          // console.log(ruang);
          if(ruang.key == this.id) {
            this.newRuangan.push(ruang);
          }
        });
    });
  }
}
