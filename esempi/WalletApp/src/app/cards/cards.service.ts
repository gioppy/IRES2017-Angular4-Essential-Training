import { Injectable } from '@angular/core';
import { ICard } from '../model/card.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/take';

@Injectable()
export class CardsService {
  private cards: ICard[] = [
    {
      id: 1,
      registeredUsername: 'Pippo Pluto',
      cardType: 'amex',
      cardNumber: '1234567890',
      cardRegistered: new Date(),
      cardDeadline: new Date(),
      cardFunds: 1500
    },
    {
      id: 2,
      registeredUsername: 'Pippo Pluto',
      cardType: 'visa',
      cardNumber: '1234567890',
      cardRegistered: new Date(),
      cardDeadline: new Date(),
      cardFunds: 10
    }
  ];

  getCards(): Observable<ICard[]> {
    // return this.cards.slice();
    return Observable.from(this.cards)
      .take(1)
      .toArray();
  }

  addFunds(id: number, newFunds: number) {
    for (let i in this.cards) {
      if (this.cards[i].id === id) {
        this.cards[i].cardFunds += newFunds;
        break;
      }
    }
    return this.getCards();
  }

  addCard(card: ICard) {
    this.cards.push(card);
    return this.getCards();
  }
}
