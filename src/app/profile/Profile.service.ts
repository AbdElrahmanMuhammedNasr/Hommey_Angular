import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostsModel } from '../products/Products.service';
import { AngularFireDatabase } from '@angular/fire/database';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {

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

  /*****************************Comments************************************** */
  addComment(commentDetai: any) {
    return this.http.post('https://hommey-b9aa6.firebaseio.com/Comments.json', commentDetai);
  };

  getAllComment(email: string) {
    return this.http.get(`https://hommey-b9aa6.firebaseio.com/Comments.json`).pipe(
      map(resData => {
        const comments: any = [];
        for (const key in resData) {
          if (resData[key].chef == email) {
            if (resData.hasOwnProperty) {
              comments.push({ ...resData[key], id: key });
            }
          }
        }
        return comments;

      }
      )
    );

  }

  /****************** to get user data ***************************/
  getUserData(){
    return this.http.get('https://hommey-b9aa6.firebaseio.com/user/-MChWlBksIIXsigomVJY');
  }



}
