import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostsModel } from '../Products.service';


@Injectable({
  providedIn: 'root'
})
export  class ProductServiceService {

  constructor(private http: HttpClient) { }

  getOnePost(itemId) {
    return this.http.get(`https://hommey-b9aa6.firebaseio.com/products.json`).pipe(
      map(resData => {
        const post: PostsModel[] = [];
        for (const key in resData) {
          if(key == itemId){
            if (resData.hasOwnProperty) {
              post.push({ ...resData[key], id: key });
            }
         }
        }
        return post;

      })
    )
   };
   getTheChef(email: string){
    return this.http.get(`https://hommey-b9aa6.firebaseio.com/user.json`).pipe(
      map(resData => {
        let chef: any;
        for (const key in resData) {
          if(resData[key].email == email){
            if (resData.hasOwnProperty) {
              chef = {...resData[key]}
              // post.push({ ...resData[key], id: key });
            }
         }
        }
        return chef;

      })
    )

   }


  //   ],
  //   chef: {
  //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWVm2qROLviGnPJKfxcRRBTDBWyx_B_3Xn5HWMUY0VeKoK6t3X',
  //     name: 'Abdo',
  //     rate: [1, 1, 1, 1, 1],
  //     dec: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  //   }
  // }

  // getProductDetails() {
  //   return this.product;
  // }

  orderProduct(nots:any){
    return this.http.post(`https://hommey-b9aa6.firebaseio.com/Notifications.json`,nots);
  }
  addToCart(order){
    return this.http.post('https://hommey-b9aa6.firebaseio.com/Cart.json', order);
  }
}
