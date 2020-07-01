import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthChildGuard implements CanActivateChild {
        canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
          if (localStorage.getItem('SuccessLogin') === 'True') {
            return true;
          }
          return false;
        }
}
