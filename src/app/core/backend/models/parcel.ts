import { Guid } from 'guid-typescript';

import { CountryDetails } from './country';

export class ParcelViewModel {
  parcelId: Guid;
  parcelNumber: string;
  recipientName: string;
  weight: number;
  price: number;

  country: CountryDetails;
  bagId: Guid;

  constructor(
    parcelId: Guid,
    parcelNumber: string,
    recipientName: string,
    weight: number,
    price: number,
    country: CountryDetails,
    bagId: Guid) {

    this.parcelId = parcelId;
    this.parcelNumber = parcelNumber;
    this.recipientName = recipientName;
    this.weight = weight;
    this.price = price;
    this.country = country;
    this.bagId = bagId;
  }
}
