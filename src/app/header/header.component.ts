import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { NotesService } from '../notes/Notes.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , DoCheck {

  disAppearnumberOfNots; // from state
  constructor(private router: Router, private store: Store<any>, private notesService: NotesService) { 
    this.store.subscribe( data =>{
        this.disAppearnumberOfNots = data.open.notifications_number;
        // console.log(data.open.notifications_number)
    })
  }
  clickPhoto = false;
  clickBell = false;
  RealNumbeOfNotificatios ;

  input = document.querySelector('SearchInput');

  login ;
  ngOnInit(): void {
    //  to get the number of notif..
    this.notesService.getAllUserNotifications('abdo@abdo.com').subscribe(
      data =>{
        this.RealNumbeOfNotificatios =  this.notesService.notsNumber;
      }
    );
    this.login = localStorage.getItem('SuccessLogin');
  }
  ngDoCheck() {
    this.login = localStorage.getItem('SuccessLogin');
  }

  onShowMenu() {
    this.clickPhoto = ! this.clickPhoto;
  }
  onShowNotifications() {
     //to change state
      this.store.dispatch({type: "OPEN_NOTIFICATIONS" });
      // to display notes
      this.clickBell = !this.clickBell;
  }
  onLogOut() {
    // the seting menu
    this.clickPhoto = false;
    // @ts-ignore
    localStorage.clear('SuccessLogin');
    // console.log('logout buttom'+ this.login);
    this.router.navigate(['/login']);
  }
  onShowCarts(){
    this.router.navigate(['/carts'])
  }

  /**************************SEARCH******************************/



}
