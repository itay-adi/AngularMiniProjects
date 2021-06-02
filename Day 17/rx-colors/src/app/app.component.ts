import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { RGB } from './models/types';
import { GameService } from './services/game.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  MyColor$!: Observable<string>;
  compColor$!: Observable<string>;

  isSuccesuble$!: Observable<boolean>;

  constructor(private gameService: GameService){}

  private RgbToString(rgb : RGB) : string{
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  ngOnInit(): void {
    this.compColor$ = this.gameService.GetComputerColor().pipe(
      map(rgb => this.RgbToString(rgb))
    );

    this.MyColor$ = combineLatest([
      this.gameService.GetRed(),
      this.gameService.GetGreen(),
      this.gameService.GetBlue()
    ]).pipe(map(rgb => this.RgbToString(rgb)));

    this.isSuccesuble$ = combineLatest([this.compColor$, this.MyColor$]).pipe(
      map(tpl => tpl[0] === tpl[1]))
  }
}
