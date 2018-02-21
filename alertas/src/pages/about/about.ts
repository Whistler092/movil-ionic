import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  presentLoading(){
    this.loadingCtrl.create({
      content: 'Por favor espere...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}
