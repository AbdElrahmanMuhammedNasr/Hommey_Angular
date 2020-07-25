import { Component, OnInit } from '@angular/core';
import {UserService} from './User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userServie: UserService, private router: Router) { }

  USER = {
    image: '',
    firstName: '',
    lastName: '',
    email:'',
    date: '',
    phone: ''
  };

  onGetOptions() {
    this.router.navigate(['/profile/profileOptins']);
  }

  ngOnInit(): void {
    /**********************get user data***********************/
    this.userServie.getUserData().subscribe(
      data => {
        this.USER = data;
        console.log(this.USER);
      }
    );
  }

}
