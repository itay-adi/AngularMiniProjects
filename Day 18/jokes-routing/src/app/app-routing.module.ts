import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokePageComponent } from './components/joke-page/joke-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', component: SearchPageComponent}, //will present the search page
  { path: 'joke/:keyword/:index', component: JokePageComponent}, //will present a specific joke according to the keyword searched and the index of the joke in the results list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
