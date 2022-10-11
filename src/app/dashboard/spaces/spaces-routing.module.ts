import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacesListComponent } from './spaces-list/spaces-list.component';
import { SpaceInformationComponent } from './space-information/space-information.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: SpacesListComponent
  },
  {
    path: 'information/:id',
    component: SpaceInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacesRoutingModule { }
