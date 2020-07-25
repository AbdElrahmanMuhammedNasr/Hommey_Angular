import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommentService } from './comment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private http:HttpClient, private commentService:CommentService) { }
  reviewPeople = [];
  obj: any;

  @ViewChild('AddNewComment') addReview:NgForm;



  ngOnInit(): void {

    this.commentService.getAllComment(localStorage.getItem('tthEmail')).subscribe(
      data => {
        this.reviewPeople = data;
        console.log(data);
      }
    );
  }

  onAddReview(){
    this.obj = {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu5xM7AympyMP6dCJg2ttLYl-romUk2LeQeMOaPmNP8Jg58YlN&usqp=CAU',
      name: localStorage.getItem('userName'),
      rate: this.addReview.value.rate,
      review:this.addReview.value.review,
      chef:localStorage.getItem('tthEmail'),
      postedin: new Date().toUTCString().split(' GMT')[0]
    }
    this.commentService.addComment(this.obj).subscribe(
      data=>{
          console.log('add comment success ' , data)
      }
    );
    this.reviewPeople.push(this.obj);
    this.addReview.reset();

  }


   

}
