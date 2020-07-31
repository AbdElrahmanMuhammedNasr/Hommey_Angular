import { Component, OnInit } from '@angular/core';
import { NotesService } from './Notes.service';
import { Router } from '@angular/router';
import { UserService } from '../profile/user/User.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private notes:NotesService, private router: Router, private userServie:UserService) { }
  /********************************************/
  sommeDummyNotes = [];
  /****************************************/

  notifications;


  ngOnInit(): void {
    this.onGetAllNotification();
  }
  onGetAllNotification(){
    this.notes.getAllUserNotifications(localStorage.getItem('theEmail')).subscribe(
      data =>{
        this.sommeDummyNotes = data.reverse();
        // console.log(this.sommeDummyNotes)
      }
    );
  };
  onShowNotifications() {
     this.router.navigate(['/home'])
 }

 onActions(what, who, listId,id){
  this.userServie.getUserData(localStorage.getItem('theEmail')).subscribe(
    data=>{
      this.notifications ={
        user:localStorage.getItem('theEmail'),
        userImage:data.image,
        order: what + ' your order',
        email: who,
        time: new Date().toUTCString().split(' GMT')[0]
      };
      this.notes.addNewNotifications(this.notifications).subscribe(
        red =>{
          this.sommeDummyNotes.splice(listId, 1);
          this.notes.deleteNotification(id);
        }
      );

  


      // console.log('---------------------------------------------');
      // console.log(this.notifications);
      // console.log('---------------------------------------------');
      // console.log(listId);
      // console.log(id);


    });


 

 }

}
