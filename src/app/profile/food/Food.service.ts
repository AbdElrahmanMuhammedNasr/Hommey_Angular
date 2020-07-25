import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { PostsModel } from 'src/app/products/Products.service';




@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private fireDatabase: AngularFireDatabase) { }

  getAllUserPosts(email: string) {
    return this.http.get(`https://hommey-b9aa6.firebaseio.com/products.json`).pipe(
      map(resData => {
        const posts: PostsModel[] = [];
        for (const key in resData) {
          if (resData[key].email == email) {
            if (resData.hasOwnProperty) {
              posts.push({ ...resData[key], id: key });
            }
          }
        }
        return posts;
      }
      )
    )
  };

  deletePost(itemId: string){
    this.fireDatabase.database.ref('/products/'+itemId).remove().then(function(){
      console.log('Done');
    });
  };






}
