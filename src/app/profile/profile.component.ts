import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {

  constructor(private router: Router) { }


  progress = false;
  food = false;
  comment = false;

  ngOnInit(): void {}

  onAppear(what){
    if (what == 'Progress'){
      this.progress = true;
      this.food = false;
      this.comment = false;

    }else if(what == 'Food'){
      this.progress = false;
      this.food = true;
      this.comment = false;

    }else if(what == 'Comment'){
      this.progress = false;
      this.food = false;
      this.comment = true;

    }

  }


  onAdd() {
    this.router.navigate(['/profile/addProduct']);

  }

}

