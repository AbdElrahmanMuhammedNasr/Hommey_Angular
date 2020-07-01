import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('SignUpDataForm' ) signUp: NgForm;
  userType = true;

  ngOnInit(): void {}

  onSwitch() {
    this.userType = !this.userType;
  }

  onSignUpDataFunction() {
    console.log(this.signUp.value);
  }

  onGoToLoginForm() {

      this.router.navigate(['/login']);
  }

}
