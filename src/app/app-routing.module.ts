import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/home/home.module#HomeModule'
  },
  {
    path: 'customers',
    loadChildren: './business/customers/customers.module#CustomersModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'vehicles',
    loadChildren: './business/vehicles/vehicles.module#VehiclesModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
