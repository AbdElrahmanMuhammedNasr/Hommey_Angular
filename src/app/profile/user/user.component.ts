import { Component, OnInit } from '@angular/core';
import { UserService } from './User.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userServie: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  owner;
  user;

  USER = null;

 

  ngOnInit(): void {
    this.owner = localStorage.getItem('theEmail');
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.email == null || params.email == undefined) {
        this.user = localStorage.getItem('theEmail');
        this.ongetUser();
      } else {
        this.user = params.email;
        this.userServie.getUserData(params.email).subscribe(
          data => {
            this.USER = data;
          }
        );


      }
    });


  }
  ongetUser() {
    this.userServie.getUserData(localStorage.getItem('theEmail')).subscribe(
      data => {
        this.USER = data;
      }
    );
  }

  ;
  obj;

  onAction(action) {
    let ownerProfile = localStorage.getItem('theEmail');
    this.obj = {
      Owner: ownerProfile,
      BolckUser: this.user
    }

    if (action == 'report') {
      this.http.post('https://hommey-b9aa6.firebaseio.com/Report.json', this.obj).subscribe(
        data => {
          console.log(data)
        }
      );

    } 
  }


}
