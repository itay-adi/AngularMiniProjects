import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { RGB } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private red: number = 0;
  private green: number = 0;
  private blue: number = 0;

  private compColor: RGB = [0, 0, 0];

  //observables
  private red$ = new BehaviorSubject(this.red);
  private green$ = new BehaviorSubject(this.green);
  private blue$ = new BehaviorSubject(this.blue);

  private computerColor$ = new BehaviorSubject(this.compColor);

  constructor() { }

  GetRed(): Observable<number>{
    return this.red$.asObservable();
  }

  GetGreen(): Observable<number>{
    return this.green$.asObservable();
  }

  GetBlue(): Observable<number>{
    return this.blue$.asObservable();
  }

  SetRed(value: number): void{
    this.red = value;
    this.red$.next(value);
  }

  SetGreen(value: number): void{
    this.green = value;
    this.green$.next(value);
  }

  SetBlue(value: number): void{
    this.blue = value;
    this.blue$.next(value);
  }

  GetComputerColor(): Observable<RGB>{
    return this.computerColor$.asObservable();
  }

  RandomizeColor(): void{
    let r = this.GetRandomByte(0,255);
    let g = this.GetRandomByte(0,255);
    let b = this.GetRandomByte(0,255);

    this.setComputerColor(r,g,b);
  }

  setComputerColor(r: number, g: number, b: number){
    this.compColor = [r,g,b];
    this.computerColor$.next([r, g, b]);
  } 

  private GetRandomByte(min: number, max: number): number{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }
}
