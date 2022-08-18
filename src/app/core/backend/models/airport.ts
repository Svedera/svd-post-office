import { Guid } from 'guid-typescript';

import { Country } from 'src/app/core/backend/enums/country';

export class AirportDetails {
  airportId: Guid;
  airport: Country;
  code: string;

  constructor(
    airportId: Guid,
    airport: Country,
    code: string
  ) {
    this.airportId = airportId;
    this.airport = airport;
    this.code = code;
  }
}
