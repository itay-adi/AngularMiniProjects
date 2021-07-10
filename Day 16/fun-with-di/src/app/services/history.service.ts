import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private records: string[] = [];

  constructor() { }

  logRecord(txt: string){
    this.records.push(txt);

    console.log(this.records);
  }

  getHistory(): string[]{
    return [...this.records];
  }
}
