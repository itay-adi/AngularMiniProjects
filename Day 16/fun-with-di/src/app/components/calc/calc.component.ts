import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})

export class CalcComponent implements OnInit {
    num1: number = 0;
    num2: number = 0;
    result: number = 0;

    constructor(public additionService: AdditionService) { }

    calc(){
        this.result = this.additionService.add(this.num1, this.num2);
    }

    setNum1(val: string){
        this.num1 = Number(val);
    }

    setNum2(val: string){
        this.num2 = Number(val);
    }

    ngOnInit(): void {

    }
}
