import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from './ProductService.service';
import { PostsModel } from '../Products.service';
import { UserService } from 'src/app/profile/user/User.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: Router,
    private userServie: UserService,
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
    phone:'',
    address:'',
    time:''
  };
  order = false;
  notifications:any;
  manageOrder;


  ngOnInit(): void {
    this.canDeactive = false;
    this.id = this.route.snapshot.params.id;
    this.productServiceService.getOnePost(this.id).subscribe(
      data => {
        this.product = data[0];
        console.log(this.product)
        this.productServiceService.getTheChef(this.product.email).subscribe(
          data=>{
            this.user= data;
            if(localStorage.getItem('theEmail') == data.email){
              this.manageOrder = false;
            }else{
              this.manageOrder = true;
            }
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
    this.userServie.getUserData(localStorage.getItem('theEmail')).subscribe(
      data=>{

        this.order= true;
        this.notifications ={
          user:localStorage.getItem('theEmail'),
          userImage:data.image,
          order:'Ordered : ' + this.product.name,
          email: this.user.email,
          time: new Date().toUTCString().split(' GMT')[0]
        };
        this.productServiceService.orderProduct(this.notifications).subscribe();
    

      }
    )
   
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
