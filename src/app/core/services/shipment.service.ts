import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';

import {
  ApiConfiguration,
  AppConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from 'src/app/core/models/appConfiguration';
import { Logging } from './abstract/logging';
import { HttpBaseService } from './http-base.service';
import { ShipmentView } from '@backend-models/models/shipment';
import { ShipmentHandler } from './abstract/shipmentHandler';
import { BagView } from '@backend-models/models/bag';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService
  extends HttpBaseService
  implements ShipmentHandler {

  constructor(
    private httpClient: HttpClient,
    private runtime: RuntimeConfiguration,
    private timeoutConfig: TimeoutConfiguration,
    private apiPaths: ApiConfiguration,
    private logger: Logging) {
    super(httpClient, logger, timeoutConfig);
  }

  public getShipmentList():
    Observable<ShipmentView[]> {

    const base = this.runtime.apiBaseUrl;
    const url = `${base}${this.apiPaths.shipmentRoute}`;

    return this.httpGet(url);
  };

  public getBagList(shipmentId: Guid): Observable<BagView[]> {

    const base = this.runtime.apiBaseUrl;
    const shipmentPath = this.apiPaths.shipmentRoute;
    const url = `${base}${shipmentPath}/${shipmentId}/bags`;

    return this.httpGet(url);
  };
}
