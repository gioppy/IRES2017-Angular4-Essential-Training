import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() onGameBegin: EventEmitter<number> = new EventEmitter();
  @Output() onGameClear: EventEmitter<{}> = new EventEmitter();
  private interval;
  constructor() { }

  ngOnInit() {
  }

  onPlay() {
    let incrementNumber = 0;
    this.interval = setInterval(() => this.onGameBegin.emit(incrementNumber++), 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }

  onClear() {
    this.onStop();
    this.onGameClear.emit();
  }

}
