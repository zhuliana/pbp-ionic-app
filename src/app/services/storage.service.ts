import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init()
  }

  addGedung(key: string, value: any) {
    this.storage.set(key, value)
  }

  addRuangan(key: string, value: any) {
    this.storage.set(key, value)
  }

  async editGedung(key: string, newValue: any) {
    await this.storage.set(key, newValue)
    this.getAllgedung()
  }

  async editRuangan(key: string, newValue: any) {
    await this.storage.set(key, newValue)
    // this.getAllRuangan()
  }

  async deleteGedung(key: string) {
    await this.storage.remove(key)
  }

  async deleteRuangan(key: string) {
    await this.storage.remove(key)
  }

  getAllgedung() {
    let gedungs: any = []  
    this.storage.forEach((key, value, index) => {
      if(key.namaGedung != null) {
        gedungs.push({'key':value, 'value':key})
      }
    });
    return gedungs
  }

  getAllRuangan() {
    let ruangans: any = []
    this.storage.forEach((key, value, index) => {
      if(key.namaRuang != null) {
        ruangans.push({'key':value, 'value':key})
      }
    });
    return ruangans
  }

  getGedungById(key: string) {
    let gedungs: any = []
    this.storage.get(key).then((val) => {
      gedungs.push({'key':val, 'value':key})
    });
    return gedungs
  }
  
  getAllruangan(id: string) {
    let ruangans: any = []
    this.storage.forEach((key, value, index) => {
      if(key.idGedung != null && key.idGedung == id) {
        ruangans.push({'key':value, 'value':key})
      }
    });
    return ruangans
  }

  async init(){
    await this.storage.create()
  }
}
