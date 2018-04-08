import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  estatura;
  peso;
  imc;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }


  btnClick() {
    this.imc = parseFloat(this.peso) / (parseFloat(this.estatura) * parseFloat(this.estatura))

    if (this.imc <= 18.5) {
      let alert = this.alertCtrl.create({
        title: 'IMC',
        subTitle: 'La persona sufre de desnutrición',
        buttons: ['OK']
      });

      alert.present();
    }

    if (this.imc >= 18.5 && this.imc < 25) {
      let alert = this.alertCtrl.create({
        title: 'IMC',
        subTitle: 'La persona sufre de bajo peso',
        buttons: ['OK']
      });

      alert.present();
    }

    if (this.imc >= 25 && this.imc < 30) {
      let alert = this.alertCtrl.create({
        title: 'IMC',
        subTitle: 'La persona tiene peso normal',
        buttons: ['OK']
      });

      alert.present();
    }

    if (this.imc >= 30 && this.imc < 40) {
      let alert = this.alertCtrl.create({
        title: 'IMC',
        subTitle: 'La persona tiene problemas de obesidad',
        buttons: ['OK']
      });

      alert.present();
    }

    if (this.imc >= 40 ) {
      let alert = this.alertCtrl.create({
        title: 'IMC',
        subTitle: 'La persona sufre de obesidad severa',
        buttons: ['OK']
      });

      alert.present();
    }

  }

}
