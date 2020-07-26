import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes/Notes.service';
import { FoodService } from '../food/Food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {



  food = 0;
  client = 0;


  constructor(private notesService: NotesService, private activatedRoute: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      if (params.email == undefined) {
        this.foodService.getAllUserPostsNumber(localStorage.getItem('theEmail')).subscribe(
          data => {
            this.food = data;
          }
        );
        this.notesService.getAllUserNotificationsNumber(localStorage.getItem('theEmail')).subscribe(
          data => {
            this.client = data;
          }
        );

      } else {
        this.foodService.getAllUserPostsNumber(params.email).subscribe(
          data => {
            this.food = data;
          }
        );
        this.notesService.getAllUserNotificationsNumber(params.email).subscribe(
          data => {
            this.client = data;
          }
        );


      }
    })

  }

}
