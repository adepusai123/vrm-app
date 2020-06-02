import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './layout/home/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/home/home.module#HomeModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'customers',
    loadChildren: './business/customers/customers.module#CustomersModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'vehicles',
    loadChildren: './business/vehicles/vehicles.module#VehiclesModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
