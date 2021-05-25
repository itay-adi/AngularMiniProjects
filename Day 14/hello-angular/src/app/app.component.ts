import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //data
  keyword : string = '';
  results: string[] = [];
  isBusy: boolean = false;

  //methods
  Search(){
    this.isBusy = true;

    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword + ' 1'
      ]
    }, 2000);
  }

  SetKeyword(value: string){
    this.keyword = value;
  }
}
