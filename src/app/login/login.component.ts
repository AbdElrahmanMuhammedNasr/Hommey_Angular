import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  @ViewChild('loginDataForm') loginData: NgForm ;
  emailOrPasswordWrong = false;
  UserFound ;

  ngOnInit(): void {}

  onLoginDataFunction() {
    this.loginService.login(this.loginData.value.EMAIL, this.loginData.value.PASSWORD)
    .subscribe(
      data =>{
        this.UserFound = data;
        console.log(this.UserFound);
        if (this.UserFound) {
          localStorage.setItem('SuccessLogin', 'True');
          localStorage.setItem('theEmail', this.loginData.value.EMAIL);
          this.loginData.reset();
          this.router.navigate(['/home']);
        } else {
          this.emailOrPasswordWrong = true;
          this.loginData.reset();
          this.router.navigate(['/login']);
        }
      }
    )

    
  }

  onGoToSignUpForm() {
    this.router.navigate(['/signUp']);
  }
}
