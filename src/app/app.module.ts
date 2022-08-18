import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppProviders } from './app.providers';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ShipmentModule } from './features/shipments/shipment.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    LayoutModule,
    SharedModule,
    ShipmentModule
  ],
  providers: AppProviders,
  bootstrap: [AppComponent]
})
export class AppModule { }
