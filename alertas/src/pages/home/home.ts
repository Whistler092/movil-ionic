import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  Alerta() {
    let alert = this.alertCtrl.create({
      title: 'Bienvenidos a Ionic',
      subTitle: 'Esta es la version numero 3',
      buttons: ['OK']
    });
    alert.present();
  }

  AlertaVariasOpciones() {
    let alert = this.alertCtrl.create({
      title: 'Juega Futbol?',
      message: 'Le gustarìa jugar un partido de futbol esta noche?',

      buttons: [
        {
          text: 'No puedo',
          role: 'cancel',
          handler: () => {
            console.log('No puedo, estoy ocupado');
          }
        },
        {
          text: 'Si claro',
          handler: () => {
            console.log('Si puedo, a que horas?');
          }
        }]
    });
    alert.present();
  }

  AlertaPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'Usuario',
          placeholder: 'Ingrese su nombre'
        },
        {
          name: 'password',
          placeholder: 'Ingrese su password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }, {
          text: 'Login',
          handler: (e) => {
            console.log('Logeado');
            console.log(e);
          }
        }
      ]
    });
    alert.present();
  }

}
