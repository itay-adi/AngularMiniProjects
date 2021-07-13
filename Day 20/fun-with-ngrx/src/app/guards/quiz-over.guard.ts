import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { selectIsQuizDone } from '../redux/app.selector';

@Injectable({
  providedIn: 'root'
})
export class QuizOverGuard implements CanActivate {
  constructor(
    private store: Store<any>, private router: Router){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<true | UrlTree>{
      
      let isOver = this.store.select(selectIsQuizDone)
        .pipe(first())
        .toPromise();

      if (!isOver){
        return true;
      }

      return this.router.createUrlTree(['results']);
  }
}
