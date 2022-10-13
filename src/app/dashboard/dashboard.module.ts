import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard.component';
import { InformationComponent } from './information/information.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { dashboardFeatureState } from './store/dashboard/dashboard.state';
import { dasbhboardReducers } from './store/dashboard/dashboard.reducers';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { SpacesModule } from './spaces/spaces.module';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [

    DashboardComponent,
       InformationComponent,
       ReservationsComponent,
       InventoryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    StoreModule.forFeature(dashboardFeatureState, dasbhboardReducers),
    MatRippleModule,
    MatTableModule,
    SpacesModule
  ]
})
export class DashboardModule { }
