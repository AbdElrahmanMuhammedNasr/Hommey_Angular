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

  getonePost(search){
    return this.http.get('https://hommey-b9aa6.firebaseio.com/products.json')
        .pipe(
          map(resData => {
            const posts: PostsModel[] = [];
            for (const key in resData) {
              if(resData[key].name.includes(search.toLowerCase()) ||resData[key].address.includes(search.toLowerCase()) || resData[key].category .includes(search.toLowerCase())){
              if (resData.hasOwnProperty) {
                posts.push({ ...resData[key], id: key });
              }
            }
          }
          console.log(posts)
            return posts;
  
          })
        )
    };

}







export class PostsModel {

  id: string;
  email: string;
  name: string;
  price: number;
  ava: boolean;
  image: string;
  inger: string;
  dis: string;
  address:string;
  time:string;
  category:string;


}