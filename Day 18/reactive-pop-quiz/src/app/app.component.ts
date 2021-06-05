import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isExamOver!: Observable<boolean>;

  constructor(private quizService: QuizService){}
  
  ngOnInit(): void {
    this.isExamOver = this.quizService.isExamOver();
  }
}
