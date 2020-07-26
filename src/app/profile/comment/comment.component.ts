import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommentService } from './comment.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../user/User.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private http: HttpClient,
    private commentService: CommentService,
    private userServie: UserService,
    private activatedRoute: ActivatedRoute) { }
  reviewPeople = [];
  obj: any;

  @ViewChild('AddNewComment') addReview: NgForm;


  USER;
  Chef;

  ngOnInit(): void {
    this.ongetUser();

    this.activatedRoute.queryParams.subscribe(params => {
      this.Chef = params.email;
    })


    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.email)
      if(params.email == undefined){
        this.commentService.getAllComment(localStorage.getItem('theEmail')).subscribe(
          data => {
            this.reviewPeople = data;
          }
        );
      }else{
        this.commentService.getAllComment(params.email).subscribe(
          data => {
            this.reviewPeople = data;
          }
        );
      }
    
    })


  }

  onAddReview() {
    this.obj = {
      image: this.USER.image,
      name: localStorage.getItem('theEmail'),
      rate: this.addReview.value.rate,
      review: this.addReview.value.review,
      chef: this.Chef,
      postedin: new Date().toUTCString().split(' GMT')[0]
    }
    this.commentService.addComment(this.obj).subscribe(
      data => {
        // console.log('add comment success ' , data)
      }
    );
    this.reviewPeople.push(this.obj);
    this.addReview.reset();

  }

  ongetUser() {
    this.userServie.getUserData(localStorage.getItem('theEmail')).subscribe(
      data => {
        this.USER = data;
      }
    );

  }




}
