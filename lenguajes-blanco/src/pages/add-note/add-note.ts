import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../model/note/note.model';
import { NoteListService } from '../../services/note-list.service';

import { HomePage } from '../home/home';

/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  note: Note = {
    title: '',
    content: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nodeListService: NoteListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotePage');
  }

  addNote(note: Note){
    this.nodeListService.addNote(note).then(ref => {
      /* Cuando se agrega la nota. Redirecciono al HomePage */
      this.navCtrl.setRoot(HomePage);
    })
  }

}
