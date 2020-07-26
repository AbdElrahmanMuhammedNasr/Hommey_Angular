import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes/Notes.service';
import { FoodService } from '../food/Food.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {



    food = 0;
    client = 0;


  constructor(private notesService:NotesService ,  private foodService:FoodService) { }

  ngOnInit(): void {
      this.food = this.foodService.NumberOfFood;
      this.client = this.notesService.notsNumber;
  }

}
