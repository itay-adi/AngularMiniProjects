import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {
  currentQuestion!: Observable<Question>;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.currentQuestion = this.quizService.getCurrentQuestion();
  }

  async onSelectAnswer(answer: number){
    await this.quizService.answerCurrentQuestion(answer);
  }
}
