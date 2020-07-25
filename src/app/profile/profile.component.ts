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


  ngOnInit(): void {}



  onAdd() {
    this.router.navigate(['/profile/addProduct']);

  }

}

