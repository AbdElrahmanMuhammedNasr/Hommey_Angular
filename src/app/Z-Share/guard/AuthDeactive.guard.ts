import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {ProductDetailsComponent} from '../../products/product-details/product-details.component';

@Injectable({providedIn: 'root'})
export class AuthDeactiveGuard implements CanDeactivate<ProductDetailsComponent> {
  canDeactivate(component: ProductDetailsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot){

    return component.canDeactive;
  }
}
