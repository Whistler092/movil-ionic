import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Note } from '../../model/note/note.model';
import { NoteListService } from '../../services/note-list.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  noteList: Observable<Note[]>

  constructor(
      public navCtrl: NavController, 
      private NoteListService: NoteListService) 
    {

    this.noteList = this.NoteListService.getNoteList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        });
      console.log(this.noteList);  
  }

}
