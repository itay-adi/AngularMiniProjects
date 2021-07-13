import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question.model';
import { addAnswer } from 'src/app/redux/app.actions';
import { selectCurrentQuestion } from 'src/app/redux/app.selector';

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {
  question$!: Observable<Question>;

  constructor(
    private store: Store<any>,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.question$ = this.store.select(selectCurrentQuestion)
  }

  answerQuestion(index: number){
    this.store.dispatch(addAnswer({answer: index}));
  }
}
