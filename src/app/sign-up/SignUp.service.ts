import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export  class SignUpService {
  constructor(private http: HttpClient) {}

  addNewUser(user: any){
    return  this.http.post('https://hommey-b9aa6.firebaseio.com/user.json', user);
  }

  addLoginUser(loginData: any){
    return  this.http.post('https://hommey-b9aa6.firebaseio.com/Login.json', loginData);
  }

}
