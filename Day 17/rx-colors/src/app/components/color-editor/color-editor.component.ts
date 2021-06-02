import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-color-editor',
  templateUrl: './color-editor.component.html',
  styleUrls: ['./color-editor.component.css']
})
export class ColorEditorComponent{
  
  constructor(private gameService: GameService) { }

  SetRed(value: string){
    this.gameService.SetRed(this.normalizeInput(value));
  }

  SetGreen(value: string){
    this.gameService.SetGreen(this.normalizeInput(value));
  }

  SetBlue(value: string){
    this.gameService.SetBlue(this.normalizeInput(value));
  }

  private normalizeInput(val: string): number{
    let num = Math.floor(Number(val));

    num = Math.min(Math.max(0,num), 255);

    return num;
  }
}
