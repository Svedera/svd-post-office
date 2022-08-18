import { Guid } from 'guid-typescript';

import { AirportDetails } from './airport';

export class ShipmentView {
  shipmentId: Guid;
  shipmentNumber: string;
  flightNumber: string;
  flightDate: Date;
  finalized: boolean;
  airport: AirportDetails;
  bagCount: number;

  constructor(
    shipmentId: Guid,
    shipmentNumber: string,
    flightNumber: string,
    flightDate: Date,
    finalized: boolean,
    airport: AirportDetails,
    bagCount: number) {

    this.shipmentId = shipmentId;
    this.shipmentNumber = shipmentNumber;
    this.flightNumber = flightNumber;
    this.flightDate = flightDate;
    this.finalized = finalized;
    this.airport = airport;
    this.bagCount = bagCount;
  }
}
