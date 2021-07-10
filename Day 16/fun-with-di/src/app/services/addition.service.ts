import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})

export class AdditionService {
  uid: number = 0;

  constructor(private historyService : HistoryService) {
    this.uid = Math.ceil(Math.random() * 1000000);
  }

  add(num1: number, num2: number): number{
    const txt = `adding ${num1} and ${num2}`;
    this.historyService.logRecord(txt);

    return num1 + num2;
  }
}
