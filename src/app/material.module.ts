import { NgModule } from '@angular/core';

import {
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  exports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule {}
