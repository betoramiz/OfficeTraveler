import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
    CommonModule
  ]
})
export class AppRouteModule { }
