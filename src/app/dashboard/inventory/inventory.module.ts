import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { OfficesComponent } from './offices/offices.component';
import { OfficeDetailComponent } from './office-detail/office-detail.component';


@NgModule({
  declarations: [
    OfficesComponent,
    OfficeDetailComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
