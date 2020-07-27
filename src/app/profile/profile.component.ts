import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {

  constructor(private router: Router, private activatedRoute: ActivatedRoute ) { }


  progress = false;
  food = false;
  comment = false;

  owner=localStorage.getItem('theEmail');
  user;


  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      if (params.email == undefined) {
        this.user = localStorage.getItem('theEmail');
      } else {
        this.user = params.email;
      }
    });
  }

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

