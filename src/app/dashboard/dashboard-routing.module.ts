import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InformationComponent } from './information/information.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'information',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'information',
        component: InformationComponent
      },
      {
        path: 'reservation',
        component: ReservationsComponent
      },
      {
        path: 'spaces',
        loadChildren: () => import('./spaces/spaces.module').then(x => x.SpacesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
