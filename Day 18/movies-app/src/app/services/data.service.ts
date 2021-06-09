import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { findIndex, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getNumberOfMovies(): Promise<number>{
    const url = `${this.baseUrl}/movies`;

    let numberOfMovies = this.httpClient
                         .get<Movie[]>(url)
                         .pipe(map(list => list.length))
                         .toPromise();
    
    return numberOfMovies;
  }

  getCaptionOfMovies(): Promise<string[]>{
    const url = `${this.baseUrl}/movies`;

    let allCaptions = this.httpClient
                      .get<Movie[]>(url)
                      .pipe(map(list => list.map(movie => movie.caption)))
                      .toPromise();

    return allCaptions;
  }

  getMovieByIndex(index: number): Promise<Movie>{
    const url = `${this.baseUrl}/movies`;

    let movie = this.httpClient
                .get<Movie[]>(url)
                .pipe(map(movies => movies[index - 1]))
                .toPromise();

    return movie;
  }

  setMovieByID(movie: Movie): Promise<Movie>{
    const url = `${this.baseUrl}/movies/${movie.id}`;
    console.log(url);
    return this.httpClient
            .put<Movie>(url, movie)
            .toPromise();
  }
}