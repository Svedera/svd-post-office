import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { BagListComponent } from './bag-list/bag-list.component';
import { ShipmentListComponent } from './shipment-list.component';

@NgModule({
  declarations: [
    ShipmentListComponent,
    BagListComponent
  ],
  exports: [
    ShipmentListComponent,
    BagListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ShipmentModule {
}
