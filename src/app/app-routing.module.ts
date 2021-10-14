import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { FullComponent } from './layout/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        redirectTo: '/authentication/login',
        pathMatch: 'full'
      },
      {
        path: 'authentication',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: 'menu',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
