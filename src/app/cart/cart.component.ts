import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts = [];
  length = false;
  price = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getUserCart(localStorage.getItem('theEmail')).subscribe(
      data => {
        this.carts = data;
        this.length = true;

        this.carts.map(ele => {
          this.price = this.price + (+ele.price);
        });
      }
    );


  }

}
