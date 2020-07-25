import { Component, OnInit, ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddNew } from './add.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private router: Router , protected addService: AddNew) { }

  @ViewChild('AddNewPro') addData:NgForm;
  wait = false;
  selectedCategory: any;

  ngOnInit(): void {
  }

  localUrl :any;
  obj: any;

  onClose(){
    this.router.navigate(['/profile']);
  }
 
  category =[
    'Breakfast',
    'Lunch',
    'Dinner',
    'Vegan',
    'Juice',
  ]

  onAddNewPro(){
    if(this.addData.valid){
      this.wait = true;
    this.obj = {
      'email': localStorage.getItem('theEmail'),
      'image': this.localUrl,
      'name': this.addData.value.name,
      'price': +this.addData.value.price,
      'dis': this.addData.value.dis,
      'inger': this.addData.value.inger,
      'ava':true,
      'address':this.addData.value.address,
      'category':this.addData.value.selectedCategory
    }
    // console.log(this.obj)
    this.addService.addNewOne(this.obj)
    .subscribe(
      data =>{
        console.log(data);
        this.router.navigate(['/profile']);
        this.addData.reset();
       }
    );

    }else{
      this.router.navigate(['/profile/addproduct']);
      ;
    }
   
  }

  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {this.localUrl = event.target.result;}
        reader.readAsDataURL(event.target.files[0]);
    }
}

}
