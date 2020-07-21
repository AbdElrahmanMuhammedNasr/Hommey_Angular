import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService, PostsModel} from './Products.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private productsService: ProductsService, private store: Store<any>) {

    this.store.subscribe(data => {
      if (data.searchPro.Search_Word < 0){
      }else{
        this.ListOfPro = [];
        this.onGetOneProduct(data.searchPro.Search_Word);
      }
    });

   }
  ListOfPro: PostsModel[] = [];
  ListOfFavor = [];
  isLogin ;

  ngOnInit(): void {
    this.onGetAllProducts();
    this.isLogin = localStorage.getItem('SuccessLogin');
  }
  onGetAllProducts() {
      this.productsService. getAllPosts().subscribe(
        data => {
          this.ListOfPro = data;
        }
      );
  }

  onGetOneProduct(search){
    this.productsService. getonePost(search).subscribe(
      data => {
        this.ListOfPro = data;
      }
    );

  }

  onGetProductDetails(id: number) {
      this.router.navigate(['/home/product/' + id]);
  }
  onAddFavourite(id: number) {
    if (this.ListOfFavor.includes(id)) {
      return this.ListOfFavor.splice(this.ListOfFavor.indexOf(id), 1);
    }
    this.ListOfFavor.push(id);
  }

}
