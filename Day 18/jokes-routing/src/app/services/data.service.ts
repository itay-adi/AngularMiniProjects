import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';

import { filter, findIndex, map } from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getJoke(keyword: string, index: number): Promise<Joke>{
    const url = `${this.baseUrl}/joke/${keyword}/${index}`;

    let joke = this.httpClient
                  .get<Joke[]>(url)
                  .pipe(
                    map(list => list.filter(joke => joke.setup.includes(keyword))),
                    map(jokes => jokes[index]))
                  .toPromise();

    return joke;
  }
}
