import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CLIENT_CONFIG } from 'src/config/config';
import { AccessService } from '../../services/access/access.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private accessService: AccessService, private router: Router ){

  } 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const isLoggedIn = this.accessService.hasValidToken();
      if(!isLoggedIn) {
        const wildcardRouteTree = this.router.parseUrl(CLIENT_CONFIG.wildcardRoute);
        wildcardRouteTree.queryParams = { redirectUrl: state.url };
        return wildcardRouteTree;
      }
    return true;
  }
}
