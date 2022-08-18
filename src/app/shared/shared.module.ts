import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxFontAwesomeModule } from 'ngx-font-awesome';

import {
  RemoteStateWrapperComponent
} from './remote-state-wrapper/remote-state-wrapper.component';
import { FinalizedTitlePipe } from './pipes/finalized-title.pipe';
import { EnumToStringPipe } from './pipes/enum-to-string.pipe';

@NgModule({
  declarations: [
    RemoteStateWrapperComponent,
    FinalizedTitlePipe,
    EnumToStringPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    NgxFontAwesomeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxFontAwesomeModule,

    FinalizedTitlePipe,
    EnumToStringPipe,

    RemoteStateWrapperComponent
  ]
})
export class SharedModule {
}
