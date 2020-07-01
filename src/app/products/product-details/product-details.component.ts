import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from './ProductService.service';
import { Route } from '@angular/compiler/src/core';
import { PostsModel } from '../Products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productServiceService: ProductServiceService) { }
    isLogin;
    canDeactive: boolean;
    id;

  product: PostsModel;
  order = false;
  notifications:any;


  ngOnInit(): void {
    this.canDeactive = false;
    this.id = this.route.snapshot.params.id;
    this.productServiceService.getOnePost(this.id).subscribe(
      data => {
        this.product = data[0];
      }
    );
    this.isLogin = localStorage.getItem('SuccessLogin');
  };

  onCloseProductdetails() {
    this.router.navigate(['/home']);
  }
  orderProduct(id: string){
    this.order= true;
    this.notifications ={
      user:"Said",
      order:this.product.name,
      email:'abdo@abdo.com',
      time: new Date().toUTCString().split(' GMT')[0]
    };
    this.productServiceService.orderProduct(this.notifications).subscribe(
      data=>{
        console.log(data)
      }
    );
    // console.log(`ordered ${id}`)
  }



}
