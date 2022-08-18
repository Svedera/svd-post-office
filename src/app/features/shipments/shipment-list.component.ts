import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Guid } from 'guid-typescript';

import { AppRouts } from '@enums/app-routs';
import { ShipmentView } from '@backend-models/models/shipment';

@Component({
  selector: 'svd-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css']
})
export class ShipmentListComponent implements OnInit {
  AppRouts = AppRouts;

  shipments: ShipmentView[] | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.shipments =
      this.activatedRoute.snapshot.data.shipments as ShipmentView[] ?? null;
  }

  async shipmentSelected(id: Guid): Promise<void> {
    const path = `${AppRouts.Shipments}/${id}/${AppRouts.Bags}`;
    await this.router.navigateByUrl(path);
  }
}
