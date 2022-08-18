import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';

import { BagView } from '@backend-models/models/bag';
import { ShipmentHandler } from '@services/abstract/shipmentHandler';


@Injectable({ providedIn: 'root' })
export class BagListResolver implements Resolve<BagView[] | null> {
  constructor(private handler: ShipmentHandler) { }

  resolve(route: ActivatedRouteSnapshot): Observable<BagView[] | null> {
    const id = route.paramMap.get('id');

    if (id == null) {
      throw new Error(`Id was not passed to ${BagListResolver.name}.`);
    }

    const guid = Guid.parse(id!);
    if (guid == null) {
      throw new Error(`Could not parse Guid in ${BagListResolver.name}.`);
    }

    return this.handler.getBagList(guid);
  }
}
