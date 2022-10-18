import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficesComponent } from './offices/offices.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'offices',
    pathMatch: 'full'
  },
  {
    path: 'offices',
    component: OfficesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
