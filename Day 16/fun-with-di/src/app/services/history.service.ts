import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private records: string[] = [];

  constructor() { }

  logRecord(txt: string){
    this.records.push(txt);
  }

  getHistory(): string[]{
    return [...this.records];
  }
}
