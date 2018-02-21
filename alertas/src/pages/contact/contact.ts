import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  showToast(position: string){
    let toast = this.toastCtrl.create({
      message: 'Toast que puede aparecer arriba, abajo o en el centro',
      duration: 2000, 
      position: position
    });

    toast.present(toast);
  }

  showToastWithCloseButton(){
    const toast = this.toastCtrl.create({
      message: 'Toast que puede cerrar',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });

    toast.present();
  }

  showLongToast(position: string){
    let toast = this.toastCtrl.create({
      message: 'Toast que puede tener una larga duración',
      duration: 2000, 
    });

    toast.present();
  }

}
