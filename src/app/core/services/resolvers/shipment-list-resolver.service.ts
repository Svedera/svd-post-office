import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { ShipmentView } from '@backend-models/models/shipment';
import { ShipmentHandler } from '@services/abstract/shipmentHandler';

@Injectable({ providedIn: 'root' })
export class ShipmentListResolver implements Resolve<ShipmentView[]> {
  constructor(private handler: ShipmentHandler) { }

  resolve(): Observable<ShipmentView[]> {
    return this.handler.getShipmentList();
  }
}
