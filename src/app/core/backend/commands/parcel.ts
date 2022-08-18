import { Guid } from 'guid-typescript';

export class CreateParcelCommand {
  parcelNumber: string;
  recipientName: string;
  weight: number;
  price: number;
  countryId: Guid;
  bagId: Guid;

  constructor(
    parcelNumber: string,
    recipientName: string,
    weight: number,
    price: number,
    countryId: Guid,
    bagId: Guid) {

    this.parcelNumber = parcelNumber;
    this.recipientName = recipientName;
    this.weight = weight;
    this.price = price;
    this.countryId = countryId;
    this.bagId = bagId;
  }
}
