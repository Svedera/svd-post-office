import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';

import { ShipmentView } from '@backend-models/models/shipment';
import { BagView } from '@backend-models/models/bag';

export abstract class ShipmentHandler {
  abstract getShipmentList: () => Observable<ShipmentView[]>;
  abstract getBagList: (shipmentId: Guid) => Observable<BagView[]>;

}
