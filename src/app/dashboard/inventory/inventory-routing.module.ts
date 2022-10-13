import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficesComponent } from './offices/offices.component';
import { OfficeDetailComponent } from './office-detail/office-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'offices',
    pathMatch: 'full'
  },
  {
    path: 'offices',
    component: OfficesComponent
  },
  {
    path: 'office/:id/detail',
    component: OfficeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
