import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../model/note/note.model';
import { NoteListService } from '../../services/note-list.service';


import { HomePage } from '../home/home';

/**
 * Generated class for the EditNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {

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
    console.log('ionViewDidLoad EditNotePage');
    console.log(this.navParams.get("note"));
    this.note = this.navParams.get("note");
  }

  updateNote(note: Note){
    this.nodeListService.updateNote(note).then(() => {
      this.navCtrl.setRoot(HomePage);
    })
  }

  removeNote(note: Note){
    this.nodeListService.removeNote(note).then(() => {
      this.navCtrl.setRoot(HomePage);
    })
  }

}
