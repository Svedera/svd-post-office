import { Guid } from 'guid-typescript';

export class CreateShipmentCommand {
  shipmentNumber: string;
  flightNumber: string;
  flightDate: Date;
  airportId: Guid;
  bagCount: number;

  constructor(
    shipmentNumber: string,
    flightNumber: string,
    flightDate: Date,
    airportId: Guid,
    bagCount: number) {

    this.shipmentNumber = shipmentNumber;
    this.flightNumber = flightNumber;
    this.flightDate = flightDate;
    this.airportId = airportId;
    this.bagCount = bagCount;
  }

}
