import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getJoke(keyword: string, index: number): Promise<Joke>{
    const url = `${this.baseUrl}/joke/:keyword/:index`;

    

  }
}
