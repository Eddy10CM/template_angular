import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AuthenticationRoutingModule { }
