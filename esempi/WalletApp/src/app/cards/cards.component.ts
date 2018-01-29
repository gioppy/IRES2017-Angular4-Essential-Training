import { Component, OnInit } from '@angular/core';
import { ICard } from '../model/card.model';
import { ICardAction } from './card-action.model';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: ICard[] = [];
  addFundsShow: boolean = false;
  addNewCardShow: boolean = false;
  private cardId: number = 0;
  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    // this.cards = this.cardsService.getCards();
    this.cardsService.getCards()
      .subscribe(
        (data: ICard[]) => {
          this.cards = data;
        }
      );
  }

  cardAction(value: ICardAction) {
    switch (value.action) {
      // aggiungi fondi
      case 1:
        this.addFundsShow = true;
        this.cardId = value.id;
        break;

      // paga
      case 2:
        break;

      // elimina carta
      case 3:
        break;
    }
  }

  addFunds(value: number) {
    this.addFundsShow = false;
    // this.cards = this.cardsService.addFunds(this.cardId, value);
  }

  handleNewCard() {
    this.addNewCardShow = true;
  }

  newCard(card: ICard) {
    this.addNewCardShow = false;
    // this.cards = this.cardsService.addCard(card);
  }

}
