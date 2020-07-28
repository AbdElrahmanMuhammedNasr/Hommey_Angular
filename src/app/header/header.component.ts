import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { NotesService } from '../notes/Notes.service';
import { UserService } from '../profile/user/User.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , DoCheck {

  disAppearnumberOfNots; // from state
  constructor(private router: Router,
     private store: Store<any>, 
     private notesService: NotesService,
     private userServie: UserService,
     ) {
    this.store.subscribe( data =>{
        this.disAppearnumberOfNots = data.open.notifications_number;
    })
  }
  clickPhoto = false;
  clickBell = false;
  RealNumbeOfNotificatios ;
  USER = null;

  // input = document.querySelector('SearchInput');

  login ;
  ngOnInit(): void {
    this.ongetUser();
    
    //  to get the number of notif..
    this.notesService.getAllUserNotifications(localStorage.getItem('theEmail')).subscribe(
      data =>{

        this.notesService.getAllUserNotificationsNumber(localStorage.getItem('theEmail')).subscribe(
          nub => {
            this.RealNumbeOfNotificatios = nub;
           }
        )}
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
        // this.store.dispatch({type: "OPEN_NOTIFICATIONS" });
      // to display notes
      this.router.navigate(['/home/notifications'])
      // this.clickBell = !this.clickBell;
      // this.router.navigate(['/home/notifications']);
  }
  onLogOut() {
    // the seting menu
    this.clickPhoto = false;
    // @ts-ignore
    // localStorage.clear('SuccessLogin');
    localStorage.removeItem('theEmail');
    localStorage.clear();

    // console.log('logout buttom'+ this.login);
    this.router.navigate(['/login']);
  }
  onShowCarts(){
    this.router.navigate(['/carts']);
  }

  /**************************SEARCH******************************/

  onSearchProduct(event){
    // console.log(event.target.value);
    this.store.dispatch({type: event.target.value});
  }


  ongetUser(){
    this.userServie.getUserData(localStorage.getItem('theEmail')).subscribe(
      data => {
        this.USER = data;
      }
    );
  }
}
