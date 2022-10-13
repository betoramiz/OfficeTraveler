import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { OfficesComponent } from './offices/offices.component';
import { OfficeDetailComponent } from './office-detail/office-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OfficesComponent,
    OfficeDetailComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ]
})
export class InventoryModule { }
