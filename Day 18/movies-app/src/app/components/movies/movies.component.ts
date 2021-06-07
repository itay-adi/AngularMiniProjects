import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  captions$!: Promise<string[]>;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.captions$ = this.dataService.getCaptionOfMovies();
  }

  goto(index: number){
    this.router.navigate(['movies', index]);
  }
}
