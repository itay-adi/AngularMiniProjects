import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  logIn(){
    this.isLoggedIn$.next(true);
  }

  logOut(){
    this.isLoggedIn$.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }
}
