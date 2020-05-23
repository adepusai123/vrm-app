import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersModule } from '../../business/customers/customers.module';

@NgModule({
  declarations: [SidenavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CustomersModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
