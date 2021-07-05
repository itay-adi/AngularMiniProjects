import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, mergeMap } from 'rxjs/operators';
import { Joke } from 'src/app/models/joke.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css']
})
export class JokePageComponent implements OnInit {
  joke$!: Observable<Joke>;

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { } //ActivatedRoute helps to get data from the URL

  async ngOnInit(): Promise<void> {
    let params$ : Observable<[string, string]> = this.route.params
            .pipe(
              map(p => [p['keyword'], p['index']]),
            );

    /*this.joke$ = params$.pipe(
      mergeMap(p => this.dataService.getJoke(p[0], Number(p[1]))
    ));*/

    this.joke$ = params$.pipe(
      mergeMap(p =>
        {
        return this.dataService.getJoke(p[0], Number(p[1]))}
      ),
    );
  }
}
