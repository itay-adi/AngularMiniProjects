import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question.model';
import { selectAllQuestions } from 'src/app/redux/app.selector';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions$!: Observable<Question[]>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.questions$ = this.store.select(selectAllQuestions);
  }
}
