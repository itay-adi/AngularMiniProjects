import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { filter, first, map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private auth: AuthenticationService,
              private router: Router){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<true | UrlTree> {

    let isLoggedIn = await this.auth
          .isLoggedIn()
          .pipe(first())
          .toPromise();
  
    if(isLoggedIn) return true;

    let targetURL = state.url;

    this.auth.isLoggedIn().pipe(
      filter(val => val === true),
      first()
    ).subscribe(t => {
        this.router.navigateByUrl(targetURL);
    });

    return this.router.parseUrl('account');
  }
}