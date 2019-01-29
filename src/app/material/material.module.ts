import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule, MatSliderModule,
  MatToolbarModule,
  MatIconModule, MatSelectModule, MatOptionModule, MatTableModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
