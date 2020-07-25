import { Component, OnInit } from '@angular/core';
import {UserService} from './User.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userServie: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  USER = null;
  // {
  //   image: '',
  //   firstName: '',
  //   lastName: '',
  //   email:'',
  //   date: '',
  //   phone: ''
  // };

  onGetOptions() {
    this.router.navigate(['/profile/profileOptins']);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
        console.log(params.email);
        // this.ongetUser();
        if(params){
          this.ongetUser();
        }else{
            this.userServie.getUserData(params.email).subscribe(
              data => {
                this.USER = data;
              }
            );


        }
    })


  }
  ongetUser(){
    this.userServie.getUserData(localStorage.getItem('theEmail')).subscribe(
      data => {
        this.USER = data;
      }
    );
  }



}
