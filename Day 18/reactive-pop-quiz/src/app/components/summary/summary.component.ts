import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  questions!: Observable<Question[]>;
  
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.questions = this.quizService.getAnsweredQuestions();
  }
}
