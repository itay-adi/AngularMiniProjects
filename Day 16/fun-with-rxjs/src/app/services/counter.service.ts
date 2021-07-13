import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value: number = 0;
  private value$ = new BehaviorSubject<number>(this.value);

  constructor() { }

  increment(){
    ++this.value;
    this.value$.next(this.value);
    //console.log(`incremented to ${this.value}`);
  }

  decrement(){
    --this.value;
    this.value$.next(this.value);
    //console.log(`decremented to ${this.value}`);
  }

  getValue(): Observable<number>{
    return this.value$.asObservable();
  }
}
