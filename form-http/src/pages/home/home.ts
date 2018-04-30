import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any=[];
  header:any = {};
  constructor(public navCtrl: NavController, public http: HTTP, public zone: NgZone) {

  }

  ionViewDidEnter(){
    //Load 
    let url = "";

    this.header['Cache-Control'] = 'no-cache';
    this.http.clearCookies();
    this.http.get(url, {}, this.header)
      .then(r => {
        this.zone.run(() => {
          this.data = JSON.parse(r.data); 
        });
      }).catch(e => {
        console.log(e);
      });

  }

  edit(id){
    this.navCtrl.push("formPage", {ID: id})
  }

  add(){
    this.navCtrl.push("formPage")
  }
}
