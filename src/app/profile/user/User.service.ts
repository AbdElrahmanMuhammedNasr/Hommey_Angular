import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private fireDatabase: AngularFireDatabase) { }

  getUserData(){
    return this.http.get('https://hommey-b9aa6.firebaseio.com/user.json').pipe(
      map(resData => {
        for ( const key in resData){
          if ( resData[key].email === localStorage.getItem('theEmail')){
            return {...resData[key]
            };
          }
        }
      })
    );
  }



}
