import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {
  @ViewChild('funds') inputFunds: ElementRef;
  @Output() onAddFunds: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /*onClick(funds: HTMLInputElement) {
    console.log(funds.value);
  }*/

  onClick() {
    const value: number = this.inputFunds.nativeElement.value;
    this.onAddFunds.emit(+value);
  }

}
