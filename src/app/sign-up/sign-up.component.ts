import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from './SignUp.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { LoginService } from '../login/Login.service';

// import *  as firebase from 'firebase';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router,
    private signUpService: SignUpService,
    private storage: AngularFireStorage,
    private loginService: LoginService

  ) { }

  @ViewChild('SignUpDataForm') signUp: NgForm;
  LoginData: any;
  otherData: any;
  localUrl: any;

  downloadURL;
  fb;
  active = true;

  emailFound = false;

  UserFound ;



  Types = ['producer', 'buyer'];


  ngOnInit(): void { }


  showPreviewImage(event: any) {

    let file = event.target.files[0];
    const fileRef = this.storage.ref(`uploads/${event.target.files[0].name}`);

    const task = this.storage.upload(`uploads/${event.target.files[0].name}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            // console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          // console.log(url);
        }
      });




  }

  onSignUpDataFunction() {
    this.loginService.checkLogin(this.signUp.value.EMAIL)
      .subscribe(
        data => {
          this.UserFound = data;

          if (this.UserFound) {
            // console.log('found');
            // console.log(this.UserFound);

            this.emailFound = true;

          } else {
            // console.log('Not found');
            // console.log(this.UserFound);

            this.LoginData = {
              email: this.signUp.value.EMAIL,
              password: this.signUp.value.PASSWORD,
              type: this.signUp.value.selectedCategory
            };

            this.otherData = {
              image: this.fb,
              firstName: this.signUp.value.FIRSTNAME,
              lastName: this.signUp.value.LASTNAME,
              phone: this.signUp.value.PHONE,
              date: this.signUp.value.DATE,
              email: this.signUp.value.EMAIL,
            }

            this.signUpService.addLoginUser(this.LoginData).subscribe(
              data => {
                // console.log(data)
              }
            )
            this.signUpService.addNewUser(this.otherData).subscribe(
              data => {
                this.active = false;
                this.router.navigate(['/login']);
                // console.log(data);
              }
            );

          }
        }
      )



  }

  onGoToLoginForm() {
    this.router.navigate(['/login']);
  }


}
