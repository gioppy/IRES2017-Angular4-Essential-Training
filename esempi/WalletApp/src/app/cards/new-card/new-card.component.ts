import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICard } from '../../model/card.model';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  months: string[] = [
    'GEN',
    'FEB',
    'MAR',
    'APR',
    'MAG',
    'GIU',
    'LUG',
    'AGO',
    'SET',
    'OTT',
    'NOV',
    'DIC'
  ];
  @Output() onNewCard: EventEmitter<ICard> = new EventEmitter();
  @ViewChild('f') form: NgForm;
  constructor() { }

  ngOnInit() {
  }

  addNewCard() {
    if (this.form.valid) {
      const values = this.form.value;
      const payload: ICard = {
        registeredUsername: `${values.firstname} ${values.lastname}`,
        cardType: values.cardtype,
        cardRegistered: new Date(),
        cardDeadline: new Date(+values.year, +values.month),
        cardNumber: values.cardnumber,
        cardFunds: 0
      };
      this.onNewCard.emit(payload);
    }
  }

}
