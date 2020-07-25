import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './Profile.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {

  constructor(private router: Router, private profileService: ProfileService) { }





  USER = {
    image: '',
    firstName: '',
    lastName: '',
    email:'',
    date: '',
    phone: ''
  };

  user = {
     image: 'https://cdn.shopify.com/s/files/1/0045/5104/9304/files/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=1581100935',
      name: 'Tamer Ali',
      job:'Sinor Chef',
      born:'August 8, 1998',
      email:'abdo@gmail.com',
      status:'Single',
      facebook:'www.facebook.com',
      youtube:'www.youtube.com',
  }

  process ={
    food:20,
    client: 40,
    satisfied:35,
    rating:5
  }



  ngOnInit(): void {
    /**********************get user data***********************/
    this.profileService.getUserData().subscribe(
      data => {
        this.USER = data;
        console.log(this.USER);
      }
    );
  

    
  }



  onGetOptions() {
    this.router.navigate(['/profile/profileOptins']);
  }
  onAdd() {
    this.router.navigate(['/profile/addProduct']);

  }

}

