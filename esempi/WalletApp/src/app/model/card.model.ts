export interface ICard {
  id?: number;
  registeredUsername: string;
  cardType: string;
  cardNumber: string;
  cardRegistered: Date;
  cardDeadline: Date;
  cardFunds: number;
}
