import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter=0;
  @Output() newGameStarted = new EventEmitter<number>();
  @Output() gameReseted = new EventEmitter<number>();
  interval;
  constructor() { }

  ngOnInit() {
  }
  startedGame() {
    this.interval = setInterval(() => {
      this.newGameStarted.emit(this.counter++);
    }, 1000);
  }

  stopedGame(){
    clearInterval(this.interval);
  }

  resetedGame(){
    this.counter = 0;
    this.gameReseted.emit(this.counter)
  }
}