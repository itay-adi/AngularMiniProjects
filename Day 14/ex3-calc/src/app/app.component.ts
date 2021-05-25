import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number = 0;
  sa: number = 0;
  b: number = 0;
  sb: number = 0;
  results: number[] = [0,0,0];
  isActivated: boolean = false;

  Calc(){
    this.isActivated = true;
    this.a = this.sa;
    this.b = this.sb;
    this.Add();
    this.Sub();
    this.Mult();
  }

  SetA(val: number){
    this.sa = val;
  }

  SetB(val: number){
    this.sb = val;
  }

  Add(){
    this.results[0] = this.a + this.b;
  }

  Sub(){
    this.results[1] = this.a - this.b;
  }

  Mult(){
    this.results[2] = this.a * this.b;
  }
}
