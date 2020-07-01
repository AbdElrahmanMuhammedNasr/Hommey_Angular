import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.css']
})
export class ProfileOptionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClose(){
      this.router.navigate(['/profile']);
  }

}
