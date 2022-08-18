import { Guid } from 'guid-typescript';

import { BagType } from 'src/app/core/backend/enums/bagType';

export class CreateParcelBagCommand {
  bagNumber: string;
  type: BagType;
  shipmentId: Guid;

  constructor(
    bagNumber: string,
    type: BagType,
    shipmentId: Guid) {

    this.bagNumber = bagNumber;
    this.type = type;
    this.shipmentId = shipmentId;
  }
}

export class CreateLetterBagCommand {
  bagNumber: string;
  type: BagType;
  shipmentId: Guid;
  itemsCount: number;
  weight: number;
  price: number;

  constructor(
    bagNumber: string,
    type: BagType,
    shipmentId: Guid,
    itemsCount: number,
    weight: number,
    price: number) {

    this.bagNumber = bagNumber;
    this.type = type;
    this.shipmentId = shipmentId;
    this.itemsCount = itemsCount;
    this.weight = weight;
    this.price = price;
  }
}
