import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import {AppRouting} from './Z-Share/appRouting';
import { NotesComponent } from './notes/notes.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import {ProductsService} from './products/Products.service';
import {ProductServiceService} from './products/product-details/ProductService.service';
import {HomeService} from './home-page/Home.service';
import {LoginService} from './login/Login.service';
import {NotesService} from './notes/Notes.service';
import {SignUpService} from './sign-up/SignUp.service';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './profile/addproduct/addproduct.component';
import { AddNew } from './profile/addproduct/add.service';


import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment.prod";
import { LoadingComponent } from './Z-Share/loading/loading.component';

import {StoreModule} from '@ngrx/store'
import { openNotificationReducer } from './Z-Share/Ngrx/reducer';
import { searchProduct } from './Z-Share/Ngrx/SearchReducer';
import { CommentComponent } from './profile/comment/comment.component';
import { FoodComponent } from './profile/food/food.component';
import { FoodService } from './profile/food/Food.service';
import { CommentService } from './profile/comment/comment.service';
import { UserComponent } from './profile/user/user.component';
import { ProgressComponent } from './profile/progress/progress.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomePageComponent,
    HeaderComponent,
    NotesComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProfileComponent,
    CartComponent,
    AddproductComponent,
    LoadingComponent,
    CommentComponent,
    FoodComponent,
    UserComponent,
    ProgressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    StoreModule.forRoot({open: openNotificationReducer, searchPro: searchProduct}),
    AngularFireModule.initializeApp(environment.firebaseConfig)

    
  ],
  providers: [CommentService ,FoodService,ProductsService, ProductServiceService, HomeService, LoginService, NotesService, SignUpService,AddNew],
  bootstrap: [AppComponent]
})
export class AppModule { }
