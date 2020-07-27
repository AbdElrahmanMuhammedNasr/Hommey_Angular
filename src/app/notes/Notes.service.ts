import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {


  constructor(private http: HttpClient){}

  getAllUserNotifications(email: string){
    return this.http.get('https://hommey-b9aa6.firebaseio.com/Notifications.json').pipe(
      map(resData => {
        const nots: any = [];
        for (const key in resData) {
          if (resData[key].email == email) {
            if (resData.hasOwnProperty) {
              nots.push({ ...resData[key], id: key });
            }
          }
        }
        return nots;
      }
      )
    )
  }


   getAllUserNotificationsNumber(email: string){
     let notsNumber = 0;
    return this.http.get('https://hommey-b9aa6.firebaseio.com/Notifications.json').pipe(
      map(resData => {
        for (const key in resData) {
          if (resData[key].email == email) {
              notsNumber ++; 
          }
        }
        return notsNumber;
      }
      )
    )
  }
}
