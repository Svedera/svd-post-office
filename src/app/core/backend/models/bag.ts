import { BagType } from 'src/app/core/backend/enums/bagType';
import { Guid } from 'guid-typescript';

export class BagView {
  bagId: Guid;
  bagNumber: string;
  type: BagType;

  itemsCount: number;
  weight: number;
  price: number;

  shipmentId: Guid;

  constructor(
    bagId: Guid,
    bagNumber: string,
    type: BagType,
    itemsCount: number,
    weight: number,
    price: number,
    shipmentId: Guid) {

    this.bagId = bagId;
    this.bagNumber = bagNumber;
    this.type = type;
    this.itemsCount = itemsCount;
    this.weight = weight;
    this.price = price;
    this.shipmentId = shipmentId;
  }
}
