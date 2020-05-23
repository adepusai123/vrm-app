import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/home/home.module#HomeModule'
  },
  {
    path: 'customers',
    loadChildren: './business/customers/customers.module#CustomersModule'
  },
  {
    path: 'vehicles',
    loadChildren: './business/vehicles/vehicles.module#VehiclesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
