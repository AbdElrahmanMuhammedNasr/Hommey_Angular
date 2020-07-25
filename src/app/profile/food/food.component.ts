import { Component, OnInit } from '@angular/core';
import { FoodService } from './Food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private foodService:FoodService) { }
  myFoodList = [];


  ngOnInit(): void {
    this.foodService.getAllUserPosts(localStorage.getItem('theEmail'))
    .subscribe(
      data =>{
        this.myFoodList = data;
        console.log(data);
      }
    )
  }

  onDeleteItem(itemId, id){
    console.log(itemId);
    console.log(id);
    this.foodService.deletePost(itemId);
    this.myFoodList.splice(id, 1);

  }

  }

  
