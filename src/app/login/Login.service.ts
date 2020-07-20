import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(email: String, password: String) {

    return this.http.get('https://hommey-b9aa6.firebaseio.com/Login.json').pipe(
      map(resData => {
        for (const key in resData) {
          if (resData[key].email == email ) {
            if(resData[key].password == password){
              return true;
            }else{
              return false;
            }
          }else{
            return false;
          }
        }
      })
    );
  }

}
