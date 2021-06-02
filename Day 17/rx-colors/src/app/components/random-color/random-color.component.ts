import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-random-color',
  templateUrl: './random-color.component.html',
  styleUrls: ['./random-color.component.css']
})
export class RandomColorComponent{

  constructor(private gameService : GameService) { }

  Randomize() : void {
    this.gameService.RandomizeColor();
  }
}
