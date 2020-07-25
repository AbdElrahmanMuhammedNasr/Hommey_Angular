import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private fireDatabase: AngularFireDatabase) { }



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

 



}
