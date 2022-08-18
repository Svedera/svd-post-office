import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Guid } from 'guid-typescript';

import { BagView } from '@backend-models/models/bag';
import { AppRouts } from '@enums/app-routs';
import { BagType } from '@backend-models/enums/bagType';

@Component({
  selector: 'svd-bags',
  templateUrl: './bag-list.component.html',
  styleUrls: ['./bag-list.component.css']
})
export class BagListComponent implements OnInit {
  BagType = BagType;
  AppRouts = AppRouts;

  bags: BagView[] | null = null;

  @Output() openShipment = new EventEmitter<Guid>();

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bags =
      this.route.snapshot.data.bags as BagView[] ?? null;
  }
}
