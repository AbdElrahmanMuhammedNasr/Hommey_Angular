import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fromEvent} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , DoCheck {

  constructor(private router: Router) { }
  clickPhoto = false;
  clickBell = false;

  input = document.querySelector('SearchInput');

  login ;
  ngOnInit(): void {
    this.login = localStorage.getItem('SuccessLogin');
  }
  ngDoCheck() {
    this.login = localStorage.getItem('SuccessLogin');
    // console.log('the login in Check '+ this.login);
  }

  onShowMenu() {
    this.clickPhoto = ! this.clickPhoto;
  }
  onShowNotifications() {
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
