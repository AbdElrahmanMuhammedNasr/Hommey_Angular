import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AddNew{

    constructor(private http: HttpClient) { }

    addNewOne(product){
        // this.profile.myFoodList.push(product);
        return this.http.post('https://hommey-b9aa6.firebaseio.com/products.json', product);
    }


}