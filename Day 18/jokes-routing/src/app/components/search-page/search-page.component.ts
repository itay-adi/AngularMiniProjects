import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Joke } from 'src/app/models/joke.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  
  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    
  }

  searchJoke(keyword : string){
    this.router.navigate(['joke', keyword, "0"]);
  }
}
