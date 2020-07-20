import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {SignUpService} from './SignUp.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private signUpService: SignUpService) { }

  @ViewChild('SignUpDataForm' ) signUp: NgForm;
  userType = true;
  LoginData: any;
  otherData: any;



  ngOnInit(): void {}

  onSwitch() {
    this.userType = !this.userType;
  }

  onSignUpDataFunction() {

    this.LoginData={
      email: this.signUp.value.EMAIL,
      password:this.signUp.value.PASSWORD
    };
  
    this.otherData={
      image:this.signUp.value.IMAGE,
      firstName:this.signUp.value.FIRSTNAME,
      lastName:this.signUp.value.LASTNAEM,
      phone:this.signUp.value.PHONE,
      date:this.signUp.value.DATE,
      email:this.signUp.value.EMAIL,
      Soical:this.signUp.value.WEBSITE,
    }

    this.signUpService.addLoginUser(this.LoginData).subscribe(
      data =>{
        console.log(data)
      }
    )
    this.signUpService.addNewUser(this.otherData).subscribe(
      data => {
        console.log(data);
      }
    );
    // console.log(this.signUp.value);
  }

  onGoToLoginForm() {
      this.router.navigate(['/login']);
  }

}
