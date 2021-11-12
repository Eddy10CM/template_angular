import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const ROUTES: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full',
			},
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'dashboard',
				component: DashboardComponent,
			},
		],
	},
]

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class MenuRoutingModule {}
