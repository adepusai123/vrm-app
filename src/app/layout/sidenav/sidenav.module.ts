import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SidenavComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
