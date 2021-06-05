import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '../models/question';
import { map } from 'rxjs/operators'
import { QUESTIONS } from '../models/questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private currentQuestionIndex = new BehaviorSubject<number>(0);

  public getCurrentQuestionIndex(): Observable<number> {
    return this.currentQuestionIndex.asObservable();
  }

  public getCurrentQuestion(): Observable<Question>{
    return this.currentQuestionIndex.pipe(
      map(i => QUESTIONS[i])
    );
  }

  public getAnsweredQuestions(): Observable<Question[]>{
    return this.currentQuestionIndex.pipe(
      map(i => QUESTIONS.filter(q => q.userAnswer > -1))
    );
  }

  public answerCurrentQuestion(val :number): Promise<void>{
    let index = this.currentQuestionIndex.value;
    let question = QUESTIONS[index];
    question.userAnswer = val;

    this.currentQuestionIndex.next(index + 1);

    return Promise.resolve();
  }

  public isExamOver(): Observable<boolean>{
    return this.currentQuestionIndex.pipe(
      map(i => i >= QUESTIONS.length)
    );
  }

  constructor() { }
}
