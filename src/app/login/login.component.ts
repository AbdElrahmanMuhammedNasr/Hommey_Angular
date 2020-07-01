import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('loginDataForm') loginData: NgForm ;
  emailOrPasswordWrong = false;

  ngOnInit(): void {}


  // this function to fet email and password
  onLoginDataFunction() {
    console.log(this.loginData.value);
    // if user name and pass are correst redict to home
    if (this.loginData.value.EMAIL === 'abdo@abdo.com' && this.loginData.value.PASSWORD === '123456A') {

      localStorage.setItem('SuccessLogin', 'True');
      localStorage.setItem('theEmail', this.loginData.value.EMAIL);
      localStorage.setItem('userName', 'AbdElrahaman');

      this.loginData.reset();
      this.router.navigate(['/home']);
    } else {
      this.emailOrPasswordWrong = true;
      this.loginData.reset();
      this.router.navigate(['/login']);
    }
  }

  onGoToSignUpForm() {
    this.router.navigate(['/signUp']);
  }
}
