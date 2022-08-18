import { Guid } from 'guid-typescript';

import { Country } from 'src/app/core/backend/enums/country';

export class CountryDetails {
  countryId: Guid;
  country: Country;
  name: string;
  code: string;

  constructor(
    countryId: Guid,
    country: Country,
    name: string,
    code: string) {

    this.countryId = countryId
    this.country = country;
    this.name = name;
    this.code = code;
  }
}
