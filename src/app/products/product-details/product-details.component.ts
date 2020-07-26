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
  cartProduct = {};
  user: {
    image:'',
    data:'',
    email:'',
    firstName:'',
    lastName:'',
    phone:''
  };
  order = false;
  notifications:any;


  ngOnInit(): void {
    this.canDeactive = false;
    this.id = this.route.snapshot.params.id;
    this.productServiceService.getOnePost(this.id).subscribe(
      data => {
        this.product = data[0];
        // console.log(this.product)
        this.productServiceService.getTheChef(this.product.email).subscribe(
          data=>{
            this.user= data;
            // console.log(data);
          }
        );
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
      user:localStorage.getItem('theEmail'),
      order:this.product.name,
      email: this.user.email,
      time: new Date().toUTCString().split(' GMT')[0]
    };
    this.productServiceService.orderProduct(this.notifications).subscribe();

    this.cartProduct={
        image: this.product.image,
        email: localStorage.getItem('theEmail'),
        Time: new Date().toISOString(),
        name: this.product.name,
        price:this.product.price,
        chefEmail:this.product.email,

    }
    this.productServiceService.addToCart(this.cartProduct).subscribe(
      data=>{
        // console.log(data);
      }
  );
    // console.log(`ordered ${id}`)
  }



}
