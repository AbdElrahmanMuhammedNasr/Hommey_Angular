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


  @ViewChild('AddNewComment') addReview:NgForm;


  myFoodList = [];
  obj: any;

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

  reviewPeople = [];


  ngOnInit(): void {
    /**********************get user data***********************/
    this.profileService.getUserData().subscribe(
      data => {
        this.USER = data;
        console.log(this.USER);
      }
    );
    /************************get comment***********************************/
    this.profileService.getAllComment(this.user.email).subscribe(
      data => {
        this.reviewPeople = data;
        console.log(data);
      }
    );

    /****************************** Food ********************************* */
    this.profileService.getAllUserPosts(localStorage.getItem('theEmail'))
    .subscribe(
      data =>{
        this.myFoodList = data;
        console.log(data);
      }
    )
  }





  onAddReview(){
    this.obj = {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu5xM7AympyMP6dCJg2ttLYl-romUk2LeQeMOaPmNP8Jg58YlN&usqp=CAU',
      name: localStorage.getItem('userName'),
      rate: this.addReview.value.rate,
      review:this.addReview.value.review,
      chef:this.user.email,
      postedin: new Date().toUTCString().split(' GMT')[0]
    }
    this.profileService.addComment(this.obj).subscribe(
      data=>{
          console.log('add comment success ' , data)
      }
    );
    this.reviewPeople.push(this.obj);
    this.addReview.reset();

  }


  onDeleteItem(itemId, id){
    console.log(itemId);
    console.log(id);
    this.profileService.deletePost(itemId);
    this.myFoodList.splice(id, 1);

  }

  onGetOptions() {
    this.router.navigate(['/profile/profileOptins']);
  }
  onAdd() {
    this.router.navigate(['/profile/addProduct']);

  }

}

