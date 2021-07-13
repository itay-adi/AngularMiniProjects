import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './redux/app.reducer';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    QuestionsListComponent,
    QuestionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      app: appReducer
    }), //Adding the reducers
    StoreDevtoolsModule.instrument({maxAge: 50})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
