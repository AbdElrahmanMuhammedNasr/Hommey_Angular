import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService, PostsModel} from './Products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private productsService: ProductsService) { }
  ListOfPro : PostsModel[] = [];
  ListOfFavor = [];
  isLogin ;

  ngOnInit(): void {
    this.onGetAllProducts();
    this.isLogin = localStorage.getItem('SuccessLogin');
  }
  onGetAllProducts() {
      this.productsService. getAllPosts().subscribe(
        data =>{
          this.ListOfPro = data;
          // console.log(this.ListOfPro[0].image);
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
