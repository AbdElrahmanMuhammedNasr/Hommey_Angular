import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {LoginComponent} from '../login/login.component';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {ProductDetailsComponent} from '../products/product-details/product-details.component';
import {ProfileComponent} from '../profile/profile.component';
import {AuthGuard} from './guard/AuthGuard.guard';
import {AuthChildGuard} from './guard/AuthChildGuard.guard';
import {AuthDeactiveGuard} from './guard/AuthDeactive.guard';
import { CartComponent } from '../cart/cart.component';
import { AddproductComponent } from '../profile/addproduct/addproduct.component';
import { NotesComponent } from '../notes/notes.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent, canActivateChild: [AuthChildGuard], children: [
    {path: 'product/:id', component: ProductDetailsComponent},
    ]},
  {path: 'carts', component: CartComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},

  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children:[
    {path: 'addProduct', component: AddproductComponent},
  ]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]

})
export class AppRouting {

}
