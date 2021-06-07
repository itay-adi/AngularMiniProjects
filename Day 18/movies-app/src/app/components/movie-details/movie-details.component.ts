import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$!: Observable<Movie>;

  hasNext$!: Observable<boolean>
  hasPrev$!: Observable<boolean>

  constructor(private dataService: DataService,
              private route: ActivatedRoute, //ActivatedRoute helps to get data from the URL
              private router: Router) { }   

  ngOnInit(): void {
    let index$ = this.route.params.pipe(
      map(prms => Number(prms['index']))
    );

    this.movie$ = index$.pipe(
      switchMap(index => this.dataService.getMovieByIndex(index))
    )

    this.hasPrev$ = index$.pipe(
      map(index => index > 1)
    );

    let totalCount$ = from(this.dataService.getNumberOfMovies());

    this.hasNext$ = combineLatest([index$, totalCount$]).pipe(
      map(tpl => tpl[0] < tpl[1])
    );
  }

  gotoNext(){
    let index = this.getCurrentIndex();
    this.router.navigate(['movies', index + 1])
  }

  gotoPrev(){
    let index = this.getCurrentIndex();
    this.router.navigate(['movies', index - 1])
  }

  private getCurrentIndex(): number{
    return Number(this.route.snapshot.params['index']);
  }

  gotoEdit(){
    let index = this.getCurrentIndex();

    this.router.navigate(['movies', index, 'edit'])
  }
}
