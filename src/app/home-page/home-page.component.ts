import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  filterUp = true;
  popIt = true;

  ngOnInit(): void {

  }

  onFilterUp() {
    this.filterUp = !this.filterUp;
  }
  onPopUpMenu() {
    this.popIt = !this.popIt;
  }

}
