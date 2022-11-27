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

  editGedung(key: string, newValue: any) {
    this.storage.set(key, newValue)
    this.getAllgedung()
  }

  deleteGedung(key: string) {
    this.storage.remove(key)
  }

  deleteRuangan() {
    this.storage.clear()
  }

  getAllgedung() {
    let gedungs: any = []  
    this.storage.forEach((key, value, index) => {
      gedungs.push({'key':value, 'value':key})
    });
    return gedungs
  }  

  async init(){
    await this.storage.create()
  }
}
