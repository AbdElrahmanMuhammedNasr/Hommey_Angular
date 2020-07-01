import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts = [];
  constructor() { }

  ngOnInit(): void {
    this.carts = [
        {
          imag: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          name: 'cart name',
          Time: new Date().toISOString(),
          price: 25,
          chef : 'abdo'
        }, {
          imag: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          name: 'cart name',
          Time: new Date().toISOString(),
          price: 20,
          chef : 'ali'
        }, {
          imag: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          name: 'cart name',
          Time: new Date().toISOString(),
          price: 14,
          chef : 'Tarek'
        }, {
          imag: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          name: 'cart name',
          Time: new Date().toISOString(),
          price: 50,
          chef : 'mostafa'
        }, {
          imag: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          name: 'cart name',
          Time: new Date().toISOString(),
          price: 90,
          chef : 'hameed'
        }, {
          imag: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          name: 'cart name',
          Time: new Date().toISOString(),
          price: 14,
          chef : 'Tarek'
        }, {
          imag: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          name: 'cart name',
          Time: new Date().toISOString(),
          price: 50,
          chef : 'mostafa'
        }, {
          imag: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          name: 'cart name',
          Time: new Date().toISOString(),
          price: 90,
          chef : 'hameed'
        },

    ]
  }

}
