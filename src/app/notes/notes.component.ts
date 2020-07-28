import { Component, OnInit } from '@angular/core';
import { NotesService } from './Notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private notes:NotesService, private router: Router) { }
  /********************************************/
  sommeDummyNotes = [];
  /****************************************/


  ngOnInit(): void {
    this.onGetAllNotification();
  }
  onGetAllNotification(){
    this.notes.getAllUserNotifications(localStorage.getItem('theEmail')).subscribe(
      data =>{
        this.sommeDummyNotes = data;
        console.log(this.sommeDummyNotes)
      }
    );
  };
  onShowNotifications() {
     this.router.navigate(['/home'])
 }


}
