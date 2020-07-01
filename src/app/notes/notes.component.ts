import { Component, OnInit } from '@angular/core';
import { NotesService } from './Notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private notes:NotesService) { }
  /********************************************/
  sommeDummyNotes = [];
  /****************************************/


  ngOnInit(): void {
    this.onGetAllNotification();
  }
  onGetAllNotification(){
    this.notes.getAllUserNotifications('abdo@abdo.com').subscribe(
      data =>{
        this.sommeDummyNotes = data;
        // console.log(data)
      }
    );
  };


}
