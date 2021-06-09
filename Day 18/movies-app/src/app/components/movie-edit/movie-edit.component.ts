import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie.model';
import { DataService } from 'src/app/services/data.service';
import { urlValidator, wordsVaidators } from 'src/app/validations/general-validators';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  form!: FormGroup;

  index$!: Observable<Movie>;
  movie$!: Observable<Movie>;

  constructor(private dataService: DataService,
              private route: ActivatedRoute, //ActivatedRoute helps to get data from the URL
              private router: Router) { }

  ngOnInit(): void {
    this.initObservers();
    this.buildForm();
  }

  private async buildForm(){
    this.form = new FormGroup({
      id: new FormControl(),
      caption: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, wordsVaidators(8)]),
      poster: new FormControl('',[Validators.required, urlValidator]),
    });

    let initialMovie: Movie = {
      id: await this.movie$.pipe(first(), map(m => m.id)).toPromise(),
      caption: await this.movie$.pipe(first(), map(m => m.caption)).toPromise(),
      description: await this.movie$.pipe(first(), map(m => m.description)).toPromise(),
      poster: await this.movie$.pipe(first(), map(m => m.poster)).toPromise()
    }

    this.form.reset(initialMovie);
  }

  private initObservers(){
    let index$ = this.route.params.pipe(
      map(prms => Number(prms['index']))
    );

    this.movie$ = index$.pipe(
      switchMap(index => this.dataService.getMovieByIndex(index))
    )
  }
  
  onGo(){
    this.dataService.setMovieByID(this.form.value);
  }

  get(fieldName: string){
    return this.form.get(fieldName);
  }
}