import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getAllPosts() {

    
   return this.http.get('https://hommey-b9aa6.firebaseio.com/products.json')
      .pipe(
        map(resData => {
          const posts: PostsModel[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty) {
              posts.push({ ...resData[key], id: key });
            }
          }
          return posts;

        })
      )
  };



}



export class PostsModel {

  id: string;
  name: string;
  price: number;
  ava: boolean;
  image: string;
  inger: string;
  dis: string;


}