import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { AuthenticationRoutingModule } from './authentication-routing.module'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		AuthenticationRoutingModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
	],
})
export class AuthenticationModule {}
