import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRouts } from '@enums/app-routs';
import {
  BagListResolver
} from '@services/resolvers/bag-list-resolver.service';
import {
  ShipmentListResolver
} from '@services/resolvers/shipment-list-resolver.service';
import {
  BagListComponent
} from './features/shipments/bag-list/bag-list.component';
import {
  ShipmentListComponent
} from './features/shipments/shipment-list.component';

const routes: Routes = [{
  path: `${AppRouts.Shipments}/:id/${AppRouts.Bags}`,
  component: BagListComponent,
  resolve: {
    bags: BagListResolver
  },
  data: {
    title: 'Bags'
  }
},
{
  path: `${AppRouts.Shipments}`,
  component: ShipmentListComponent,
  resolve: {
    shipments: ShipmentListResolver
  },
  data: {
    title: 'Shipments'
  }
},
{
  path: '',
  redirectTo: `${AppRouts.Shipments}`,
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: `${AppRouts.Shipments}`,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
