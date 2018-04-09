import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arrData = []
  myInput

  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) {
    /*this.fdb.list('myItems/').valueChanges().subscribe(data => {
      console.log(this.arrData);
      this.arrData = data;
    });*/

    this.fdb.list('myItems/').snapshotChanges().map(actions => {
      let a = actions.map(action => (
        {
           key: action.key,
           value: action.payload.val() 
        }));
        console.log(a);
        this.arrData = a;
        return a;
    }).subscribe(items => {
      return items.map(item => item.key);
    });
  }

  btnAddClicked(){
    this.fdb.list("/myItems/").push(this.myInput);
    this.myInput  = "";
  }

  delete(i){
    this.fdb.list("/myItems/").remove(i);
  }
}
