import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuRoutingModule } from './menu-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
