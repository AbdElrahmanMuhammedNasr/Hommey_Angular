import { Component, OnInit, ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddNew } from './add.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private router: Router, protected addService: AddNew, private storage: AngularFireStorage
  ) { }

  @ViewChild('AddNewPro') addData: NgForm;
  wait = false;
  selectedCategory: any;

  ngOnInit(): void {
  }

  localUrl;
  obj: any;
  downloadURL;
  fb;

  onClose() {
    this.router.navigate(['/profile']);
  }

  category = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Vegan',
    'Juice',
  ]

  onAddNewPro() {
    if (this.addData.valid) {
      this.wait = true;
      this.obj = {
        'email': localStorage.getItem('theEmail'),
        'image': this.fb,
        'name': this.addData.value.name,
        'price': +this.addData.value.price,
        'dis': this.addData.value.dis,
        'inger': this.addData.value.inger,
        'ava': true,
        'address': this.addData.value.address,
        'category': this.addData.value.selectedCategory
      }
      // console.log(this.obj)
      this.addService.addNewOne(this.obj)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/profile']);
            this.addData.reset();
          }
        );

    } else {
      this.router.navigate(['/profile/addproduct']);
      ;
    }

  }

  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => { this.localUrl = event.target.result; }
      reader.readAsDataURL(event.target.files[0]);
    }

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

}
