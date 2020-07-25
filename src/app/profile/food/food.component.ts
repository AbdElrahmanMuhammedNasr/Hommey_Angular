import { Component, OnInit } from '@angular/core';
import { FoodService } from './Food.service';
import { ProductServiceService } from 'src/app/products/product-details/ProductService.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private foodService:FoodService, private productServiceService: ProductServiceService) { }
  myFoodList = [];

  cartProduct;
  notifications;


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

  };

  orderProduct(prod){
    this.notifications ={
      user:localStorage.getItem('userName'),
      order:prod.name,
      email:localStorage.getItem('theEmail'),
      time: new Date().toUTCString().split(' GMT')[0]
    };
    this.productServiceService.orderProduct(this.notifications).subscribe();

    this.cartProduct={
        image: prod.image,
        email: localStorage.getItem('theEmail'),
        Time: new Date().toISOString(),
        name: name,
        price:prod.price,
        chefEmail:prod.email,

    }
    this.productServiceService.addToCart(this.cartProduct).subscribe(
      data=>{
        console.log(data);
      }
  );

  }
}
