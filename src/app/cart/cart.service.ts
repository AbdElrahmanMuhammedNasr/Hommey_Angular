import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostsModel } from '../products/Products.service';


@Injectable({
    providedIn:'root'
})
export class CartService{
    constructor(private http: HttpClient){}

    getUserCart(email){
        return this.http.get('https://hommey-b9aa6.firebaseio.com/Cart.json').pipe(
            map(resData=>{
                const cart = [];
                for (const key in resData) {
                    if (resData[key].email == email) {
                      if (resData.hasOwnProperty) {
                        cart.push({ ...resData[key], id: key });
                      }
                    }
                  }
                return cart;
                
            })
        );

    }

}


