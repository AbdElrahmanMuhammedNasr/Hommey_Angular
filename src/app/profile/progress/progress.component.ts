import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {


  process ={
    food:20,
    client: 40,
    satisfied:35,
    rating:5
  }

  constructor() { }

  ngOnInit(): void {
  }

}
