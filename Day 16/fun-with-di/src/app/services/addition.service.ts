import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdditionService {
  uid: number = 0;

  constructor() {
    this.uid = Math.ceil(Math.random() * 1000000);
  }

  add(num1: number, num2: number): number{
    console.log(`adding ${num1} and ${num2}`);
    return num1 + num2;
  }
}
