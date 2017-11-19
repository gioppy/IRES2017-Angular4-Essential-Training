import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  template: `<button type="button" (click)="handleClick()">Visualizza dettagli</button>`
})
export class CounterButtonComponent implements OnInit {
  @Output() onClick: EventEmitter<Date> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.onClick.emit(new Date());
  }

}
